import React from "react";
import style from "./Repo.module.css"

const Repo = (props) => {
  const repo = props.repo

  return (
    <div className={style.repo}>
      <div className={style.repoName}>
        <a href={repo.html_url} target="_blank">{repo.name}</a>
      </div>
      <div className={style.repoDescription}>{repo.description}</div>
    </div>
  )
}
export default Repo;