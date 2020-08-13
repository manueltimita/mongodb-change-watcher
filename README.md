# mongodb-change-watcher

监视 mongodb collection 的变化，每次变化触发回调，使用 change stream https://docs.mongodb.com/manual/changeStreams/ API，更干净但是仅对集群有效


watch mongodb collection change, so you can add callback every time change happens, it is using mongodb change stream https://docs.mongodb.com/manual/changeStreams/, more clean but works for replica sets only

如果你还没有 mongodb 集群，可以参考 https://gist.github.com/asoorm/7822cc742831639c93affd734e97ce4f

you can follow https://gist.github.com/asoorm/7822cc742831639c93affd734e97ce4f to set up your test replica set if you don't have one yet

## 使用 | usage

文档 | docs [docs/globals.md](./docs/globals.md)

```
import Watcher from 'mongodb-change-watcher'

let watcher = new Watcher(collection)
watcher.onChange((change) => console.log(change))
```

输出示例 | output example

```
{
  _id: {
    _data: '825F34E36A000000012B022C0100296E5A1004F1B9B3ED0D04419D94AFB18C3D7B13E046645F696400645F34E36A25C1B8398854C79C0004'
  },
  operationType: 'insert',
  clusterTime: Timestamp { _bsontype: 'Timestamp', low_: 1, high_: 1597301610 },
  fullDocument: { _id: 5f34e36a25c1b8398854c79c, time: 2020-08-13T06:53:30.962Z },
  ns: { db: 'testdb', coll: 'testcollection' },
  documentKey: { _id: 5f34e36a25c1b8398854c79c }
}
```

完整代码 | full code refer [`test/smoke.ts`](./test/smoke.ts)
