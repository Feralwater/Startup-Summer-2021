import axios from "axios";
import {setIsFetching, setUser, setUserEmpty} from "../../reducers/userReducer";

const AuthStr = 'Bearer ' + process.env.REACT_APP_GITHUB_TOKEN;

export const getUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true))
      const response = await axios.get(`https://api.github.com/users/${user}`, {'headers': {'Authorization': AuthStr}})
      dispatch(setUser(response.data))
    } catch (e) {
      dispatch(setUserEmpty(true))
      dispatch(setIsFetching(false))
    }
  }
}
