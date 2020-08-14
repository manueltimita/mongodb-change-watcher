const { MongoClient } = require('mongodb')

const url = 'mongodb://192.168.5.43:27011,192.168.5.43:27012,192.168.5.43:27013/example?replicaSet=rs0'

let client, db, collection

module.exports.init = async () => {
  client = await MongoClient.connect(url, { useUnifiedTopology: true })
  db = client.db('testdb')
  collection = db.collection('config')
}

module.exports.getCollection = () => collection

module.exports.getConfig = async () => {
  let found = await collection.findOne({})
  if (!found) {
    let doc = {
      global: {
        plugins: ['plugin1'],
        flag1: true
      }, app: {
        flag2: false
      }
    }
    await collection.insertOne(doc)
    return doc
  }
  return found
}

module.exports.updateConfig = async (doc) => {
  return await collection.replaceOne({}, doc)
}