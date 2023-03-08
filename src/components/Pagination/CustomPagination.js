import React from 'react'
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';

const CustomPagination = ({ count, setCurrentPage, currentPage, baseURL }) => {
  const navigate = useNavigate()

  function changeHendler(e) {
    if(window.scrollY > 0) {
      window.scroll(0, 0)
    }
    setCurrentPage(e.target.textContent)
    navigate(`/${baseURL}/pages/${e.target.textContent}`)
  }
  return (
    <div className='pagination_wrap w-100 d-flex justify-content-center py-5 '>
        <Pagination 
          count={count}
          defaultPage={currentPage}
          color="primary"
          onChange={(e) => {
            changeHendler(e)
          }}
        />
    </div>
  )
}

export default CustomPagination