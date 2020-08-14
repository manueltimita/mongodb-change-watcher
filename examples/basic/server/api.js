const { Router } = require('express')
const { json } = require('body-parser')
const Watcher = require('mongodb-change-watcher').default
const { getConfig, updateConfig, getCollection } = require('./mongo')
const sse = require('./sse')

let router = Router()

router.use(json())
router.get('/', async (req, res) => res.json(await getConfig()))
router.put('/', async (req, res) => req.body
  ? res.json(await updateConfig(req.body))
  : res.json({ error: `empty body` }))

router.get('/change-stream', sse.init)
console.log({ Watcher, collection: getCollection() })
let watcher = new Watcher(getCollection())
watcher.onChange(change => sse.send(change.fullDocument))

module.exports = router