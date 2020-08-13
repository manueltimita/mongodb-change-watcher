import { Collection, ChangeStream, ChangeStreamOptions } from 'mongodb'

type ChangeCallBack = (change: {
  _id: any,
  operationType: string,
  fullDocument: any,
  ns: any,
  documentKey: {
    _id: any
  },
}) => any

export default class Watcher {
  changeStreamIterator: ChangeStream
  listeners: Map<ChangeCallBack, ChangeCallBack> = new Map()
  stopped = false

  /**
   * construct a Watcher
   * @param collection mongodb collection instance
   * @param pipeline refer https://docs.mongodb.com/manual/reference/method/db.collection.watch/
   * @param options refer https://docs.mongodb.com/manual/reference/method/db.collection.watch/
   */
  constructor(private collection: Collection, pipeline?: [], options?: ChangeStreamOptions) {
    this.changeStreamIterator = this.collection.watch(pipeline, options)
    this.start()
  }

  /**
   * add a callback
   * @param fn 
   */
  onChange(fn: ChangeCallBack) {
    return this.listeners.set(fn, fn)
  }

  /**
   * remove a callback
   * @param fn 
   */
  offChange(fn?: ChangeCallBack) {
    if (!fn) {
      return this.listeners.clear()
    }
    return this.listeners.delete(fn)
  }

  /**
   * stop watching
   */
  stop() {
    this.stopped = true
    this.changeStreamIterator.close()
  }

  /**
   * start watching called in construct
   */
  private async start() {
    while (!this.stopped) {
      try {
        let next = await this.changeStreamIterator.next()
        this.listeners.forEach(fn => fn(next))
      } catch (error) {
        // error when `this.changeStreamIterator.close()`
      }
    }
  }
}