import * as RxDB from 'rxdb'
RxDB.plugin(require('pouchdb-adapter-idb'))
RxDB.plugin(require('pouchdb-adapter-http'))
// RxDB.QueryChangeDetector.enable()
import rxCollInfo from './rx-coll-info'

let dbPromise = null
const https = 'https://bustidb.club:15984/'
const http = 'http://51.15.68.18:5984/'
const remote = process.env.NODE_ENV === 'production' ? https : http

const _create = async function() {
  const db = await RxDB.create({
    name: 'client',
    adapter: 'idb',
    pouchSettings: {
      auto_compaction: true,
      skip_setup: true,
    },
  })

  db.waitForLeadership().then(() => {
    document.title = '♛ ' + document.title
  })
  await coll(db)
  return db
}

export function get() {
  if (!dbPromise) dbPromise = _create()
  return dbPromise
}

const coll = db => {
  return Promise.all(
    rxCollInfo.map(colData => {
      const prom = new Promise((resolve, reject) => {
        db.collection(colData).then(
          col => {
            col.sync({
              remote: remote + colData.name,
              direction: {
                pull: true,
                push: false,
              },
              options: {
                live: true,
                retry: true,
              },
            })
            resolve(col)
          },
          e => reject(e),
        )
      })
      return prom
    }),
  )
}
