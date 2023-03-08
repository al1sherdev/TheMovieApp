import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { APIKEY } from '../context/config';

// Components
import Filter from '../components/Filter/Filter';
import CustomPagination from '../components/Pagination/CustomPagination';
import SingleContent from '../components/SingleContent/SingleContent';
import Skeleton from '../components/Skeleton/Skeleton';


const Trends = () => {
  const api_key = useContext(APIKEY)
  const { page } = useParams()
  // states
  const [trends, setTrends] = useState([])
  const [currentPage, setCurrentPage] = useState(page)
  const [selectedGenres, setSelectedGenres] = useState([])
  const totalPage = 500

  useEffect(() => {
    getTrends()
  }, [currentPage, selectedGenres])

   async function getTrends() {
    await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${page}&with_genres=${selectedGenres}`)
                .then(res => {
                  setTrends(res.data.results)
                })
                .catch(err => console.log(err))
  }

  return (
    <div className='main trends'>
      <Container>
        <Row>
          <Col xl="3">
            <Filter 
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres} 
            />
          </Col>
          <Col xl="9">
            <Row className='gy-5'>
              {
                trends.length !==0 ? (
                  trends.map((item, index) => {
                    return(
                      <Col key={index} xs="12" sm="6" lg="4" xl="3">
                        <SingleContent 
                          item={item}
                          index={index}
                        />
                      </Col>
                    )
                  })
                ) : (
                  <div className='d-flex justify-content-center align-items-center'>
                    <Skeleton />
                  </div>
                )
              }
              <CustomPagination 
                currentPage={+page}
                count={totalPage}
                baseURL="trends"
                setCurrentPage={setCurrentPage}  
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Trends