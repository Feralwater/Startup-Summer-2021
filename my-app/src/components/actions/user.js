import axios from "axios";
import {setIsFetching, setUser, setUserEmpty} from "../../reducers/userReducer";


export const getUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true))
      const response = await axios.get(`https://api.github.com/users/${user}`)
      dispatch(setUser(response.data))
    } catch (e) {
      dispatch(setUserEmpty(true))
      dispatch(setIsFetching(false))
    }
  }
}
