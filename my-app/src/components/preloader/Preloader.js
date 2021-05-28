import style from "./Preloader.module.css"
import React from "react";

let Preloader = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.fetching}></div>
    </div>

  )
}

export default Preloader;