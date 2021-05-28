import React, {useEffect} from "react";
import style from "./Profile.module.css"
import {Redirect, useParams} from "react-router-dom";
import Header from "../header/Header";
import {getUser} from "../actions/user";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repos from "../repos/Repos";
import EmptyRepo from "../repos/repo/EmptyRepo";
import User from "../users/user/User";
import {setCurrentPage} from "../../reducers/reposReducer";
import Preloader from "../preloader/Preloader";


const Profile = (props) => {

  const dispatch = useDispatch();
  const {username} = useParams()
  const avatar = useSelector(state => state.users.avatar)
  const name = useSelector(state => state.users.name)
  const login = useSelector(state => state.users.login)
  const url = useSelector(state => state.users.url)
  const followers = useSelector(state => state.users.followers)
  const following = useSelector(state => state.users.following)
  const currentPage = useSelector(state => state.repos.currentPage)
  const isUserEmpty = useSelector(state => state.users.isUserEmpty)

  useEffect(() => {
    dispatch(getUser(username))
    dispatch(setCurrentPage(1));
  }, [username])

  useEffect(() => {
    dispatch(getRepos(username, currentPage))
  }, [username, currentPage])

  const totalCount = useSelector(state => state.users.totalCount)

  function printProfilePage(login) {

    if (login.toLowerCase() === username.toLowerCase()) {
      return (<>
          <div className={style.user}>
            <User avatar={avatar}
                  name={name}
                  login={login}
                  followers={followers}
                  following={following}
                  url={url}/>
          </div>
          {totalCount > 0
            ?
            <div className={style.repos}><Repos/></div>
            :
            <div><EmptyRepo/></div>}
        </>
      )
    } else {
      return (<>
        <Preloader/>
      </>)
    }
  }

  return (<>
      <Header history={props.history}/>
      <div className={style.container}>
        {isUserEmpty === true
          ?
          <Redirect to={"/error"}/>
          :
          printProfilePage(login)
        }
        {/*{printProfilePage(login)}*/}
      </div>
    </>
  )
}
export default Profile;