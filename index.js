import makeStore from './src/store'
import startServer from './src/server'

export const store = makeStore()

startServer(store)

/**
 * Load up some test data just so we can
 * see something while developing.
 */
store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
})

store.dispatch({ type: 'NEXT' })
