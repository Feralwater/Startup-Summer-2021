import style from "./User.module.css";
import React from "react";
import {useSelector} from "react-redux";

const User = (props) => {
  const isFetching = useSelector(state => state.users.isFetching)
  return (<>
    {/*{*/}
    {/*  isFetching === false*/}
    {/*    ?*/}
    {/*<div>*/}
    <div className={style.image_container}>
      <img className={style.avatar} src={props.avatar} alt="avatar"/>
    </div>
    <div className={style.follow_items}>
      <h1 className={style.card}>
        <span className={style.card_name}>{props.name}</span>
        <a className={style.card_username} target="_blank" href={props.url}> {props.login} </a>
      </h1>
      <div className={style.followers}>
        <div className={style.follow}>
          <div className={style.follow_image}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M11.028 8.73877C11.028 10.3988 9.69338 11.7388 8.02764 11.7388C6.3619 11.7388 5.01726 10.3988 5.01726 8.73877C5.01726 7.07877 6.3619 5.73877 8.02764 5.73877C9.69338 5.73877 11.028 7.07877 11.028 8.73877ZM19.0557 8.73877C19.0557 10.3988 17.7211 11.7388 16.0553 11.7388C14.3896 11.7388 13.0449 10.3988 13.0449 8.73877C13.0449 7.07877 14.3896 5.73877 16.0553 5.73877C17.7211 5.73877 19.0557 7.07877 19.0557 8.73877ZM8.02764 13.7388C5.68958 13.7388 1.00342 14.9088 1.00342 17.2388V18.7388C1.00342 19.2888 1.45498 19.7388 2.00688 19.7388H14.0484C14.6003 19.7388 15.0519 19.2888 15.0519 18.7388V17.2388C15.0519 14.9088 10.3657 13.7388 8.02764 13.7388ZM15.082 13.7888C15.4332 13.7588 15.7643 13.7388 16.0553 13.7388C18.3934 13.7388 23.0795 14.9088 23.0795 17.2388V18.7388C23.0795 19.2888 22.628 19.7388 22.0761 19.7388H16.8782C16.9885 19.4288 17.0588 19.0888 17.0588 18.7388V17.2388C17.0588 15.7688 16.266 14.6588 15.1221 13.8288C15.1191 13.8257 15.116 13.8218 15.1127 13.8175C15.1051 13.8076 15.096 13.7957 15.082 13.7888Z"
                    fill="#808080"/>
            </svg>
          </div>
          <span>
          {
            props.followers > 1000 ? (props.followers / 1000).toFixed(1) + "k" : props.followers
          }
        </span> followers
        </div>
        <div className={style.follow}>
          <div className={style.follow_image}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M12.0553 4.73877C12.0553 6.94877 10.2591 8.73877 8.04148 8.73877C5.82383 8.73877 4.02763 6.94877 4.02763 4.73877C4.02763 2.52877 5.82383 0.73877 8.04148 0.73877C10.2591 0.73877 12.0553 2.52877 12.0553 4.73877ZM0.0137939 14.7388C0.0137939 12.0788 5.36224 10.7388 8.04148 10.7388C10.7207 10.7388 16.0692 12.0788 16.0692 14.7388V15.7388C16.0692 16.2888 15.6176 16.7388 15.0657 16.7388H1.01725C0.465351 16.7388 0.0137939 16.2888 0.0137939 15.7388V14.7388Z"
                    fill="#808080"/>
            </svg>
          </div>
          <span>
          {
            props.following > 1000 ? (props.following / 1000).toFixed(1) + "k" : props.following
          }
        </span> following
        </div>
      </div>
    </div>
    {/*</div>*/}
    {/*    :*/}
    {/*    <Preloader/>*/}
    {/*}*/}
  </>)
}
export default User;