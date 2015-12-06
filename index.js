import makeStore from './src/store'
import startServer from './src/server'

const port = 8090
export const store = makeStore()

startServer(store, port)
console.log(`Serving from port: ${port}`)

/**
 * Load up some test data just so we can
 * see something while developing.
 */
store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
})

store.dispatch({ type: 'NEXT' })
