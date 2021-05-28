import axios from "axios";
import {setIsFetching, setRepos} from "../../reducers/reposReducer";

export const getRepos = (user, currentPage) => {

  return async (dispatch) => {
    dispatch(setIsFetching(true))
    const response = await axios.get(`https://api.github.com/users/${user}/repos?per_page=4&page=${currentPage}`)
    dispatch(setRepos(response.data))
  }
}
