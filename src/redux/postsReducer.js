import { CREATE_POST } from './types'

const initialState = {
  posts: [],
  fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST/CREATE_POST':
      return { ...state, posts: [...state.posts, action.payload] }
    // return { ...state, posts: 'hello' }
    default:
      return state
  }
}
