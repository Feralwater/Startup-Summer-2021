const SET_REPOS = "SET_REPOS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const defaultState = {
  repos: [],
  isFetching: true,
  currentPage: 1,
  html_url: "",
}

export default function (state = defaultState, action) {

  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        repos: action.payload,
        html_url: action.payload.html_url,
        isFetching: false,
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    default:
      return state
  }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page})