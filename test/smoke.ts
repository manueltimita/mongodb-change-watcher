import { MongoClient } from 'mongodb'
import Watcher from '../src/index'

const url = 'mongodb://192.168.5.43:27011,192.168.5.43:27012,192.168.5.43:27013/example?replicaSet=rs0'
  ;
(async () => {
  console.log('before connect')
  try {
    let client = await MongoClient.connect(url, { useUnifiedTopology: true })
    console.log('after connect')
    let db = client.db('testdb')
    let collection = db.collection('testcollection')
    let watcher = new Watcher(collection)
    watcher.onChange(change => console.log(change))

    let interval = setInterval(async () => {
      await collection.insertOne({ time: new Date() })
    }, 1000)

    setTimeout(() => {
      clearInterval(interval)
      watcher.stop()
      client.close()
    }, 5000)

  } catch (err) {
    console.log(err)
  }
})()