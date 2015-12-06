import { setEntries, next, vote, InitialState } from './core'

export default function reducer(state = InitialState, action) {
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries)
    case 'NEXT':
      return next(state)
    case 'VOTE':
      return state.update('vote', voteState => {
        return vote(voteState, action.entry)
      })
  }

  return state
}
