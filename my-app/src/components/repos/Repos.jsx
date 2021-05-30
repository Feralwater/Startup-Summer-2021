import React from "react";
import style from "./Repos.module.css"
import {useDispatch, useSelector} from "react-redux";
import Repo from "./repo/Repo";
import Preloader from "../preloader/Preloader";
import ReactPaginate from 'react-paginate';
import {getRepos} from "../actions/repos";
import {useParams} from "react-router-dom";
import {setCurrentPage} from "../../reducers/reposReducer";


const Repos = () => {

  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.repos)
  const isFetching = useSelector(state => state.repos.isFetching)
  const currentPage = useSelector(state => state.repos.currentPage)
  const totalCount = useSelector(state => state.users.totalCount)
  const {username} = useParams()
  const pagesCount = Math.ceil(totalCount / 4)

  const handlePageClick = (currentPage) => {
    dispatch(getRepos(username, currentPage.selected + 1));
    dispatch(setCurrentPage(currentPage.selected + 1));
  };


  return (
    <div className={style.wrapper}>
      <div className={style.repos_container}>
        <div className={style.title}>Repositories ({totalCount})</div>
        {
          isFetching === false
            ?
              repos.map((repo, index) => <Repo repo={repo} key={index}/>)

            :
            <Preloader/>
        }
      </div>
      <div className={style.wrapper_pagination + (isFetching ? 'none' : '')}>
        <div className={style.page_numbers}>
          <div className={style.pagination_items}>
            {(currentPage - 1) * 4 + 1}-{
            Math.ceil(totalCount / pagesCount) * currentPage > totalCount ? totalCount :
              Math.ceil(totalCount / pagesCount) * currentPage
          } of {totalCount} items
          </div>
        </div>

        <ReactPaginate
          previousLabel={<svg className={style.previous} width="8" height="12" viewBox="0 0 8 12" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M3.41436 6.00008L7.70726 1.70718L6.29304 0.292969L0.585938 6.00008L6.29304 11.7072L7.70726 10.293L3.41436 6.00008Z"
                  fill="#808080"/>
          </svg>}
          nextLabel={<svg className={style.next} width="8" height="12" viewBox="0 0 8 12" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L1 11" stroke="#808080" strokeWidth="2"/>
          </svg>}
          breakLabel={<svg className={style.break} width="11" height="3" viewBox="0 0 11 3" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.128 0.58C0.504 0.58 0.0880001 0.996 0.0880001 1.62C0.0880001 2.244 0.504 2.66 1.128 2.66C1.752 2.66 2.168
              2.244 2.168 1.62C2.168 0.996 1.752 0.58 1.128 0.58ZM5.378 0.58C4.754 0.58 4.338 0.996 4.338 1.62C4.338 2.244 4.754 2.66
              5.378 2.66C6.002 2.66 6.418 2.244 6.418 1.62C6.418 0.996 6.002 0.58 5.378 0.58ZM9.628 0.58C9.004 0.58 8.588 0.996 8.588 1.62C8.588
              2.244 9.004 2.66 9.628 2.66C10.252 2.66 10.668 2.244 10.668 1.62C10.668 0.996 10.252 0.58 9.628 0.58Z"
              fill="#808080"/>
          </svg>}
          pageCount={pagesCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={style.pagination}
          pageClassName={style.pages}
          activeClassName={style.active}
        />
      </div>

    </div>

  )
}
export default Repos;