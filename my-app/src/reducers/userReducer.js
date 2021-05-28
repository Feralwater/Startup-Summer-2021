const SET_USER = "SET_USER"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_USER_EMPTY = "SET_USER_EMPTY"

const defaultState = {
  avatar: "",
  name: "",
  login: "",
  url: "",
  followers: null,
  following: null,
  totalCount: 0,
  isFetching: true,
  isUserEmpty: false,
}

export default function (state = defaultState, action) {

  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        avatar: action.payload.avatar_url,
        name: action.payload.name,
        login: action.payload.login,
        url: action.payload.html_url,
        followers: action.payload.followers,
        following: action.payload.following,
        totalCount: action.payload.public_repos,
        isFetching: false,
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_USER_EMPTY:
      return {
        ...state,
        isUserEmpty: action.payload
      }
    default:
      return state
  }
}

export const setUser = (user) => ({type: SET_USER, payload: user});
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool});
export const setUserEmpty = (bool) => ({type: SET_USER_EMPTY, payload: bool});
