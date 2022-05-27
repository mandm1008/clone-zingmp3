import { SET_PLAYLISTS } from './constants'

const initState = {
  playlists: [],
  musics: []
}

function reducer(state, action) {
  switch (action.type) {
    case SET_PLAYLISTS:
      return [...state, action.payload]
    default:
      throw new Error('Initial action type not supported')
  }
}

export { initState }
export default reducer
