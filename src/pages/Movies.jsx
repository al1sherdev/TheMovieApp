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

const Movies = () => {

  const api_key = useContext(APIKEY)
  const { page } = useParams()
  // states
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(page)
  const [selectedGenres, setSelectedGenres] = useState([])
  const totalPage = 500

  useEffect(() => {
    getMovies()
  }, [currentPage, selectedGenres])

   async function getMovies() {
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${selectedGenres}`)
                .then(res => {
                  setMovies(res.data.results)
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
              movies.length !==0 ? (
                movies.map((item, index) => {
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
                baseURL="movies"
                setCurrentPage={setCurrentPage}  
              />
            </Row>
          </Col>
        </Row>
        
      </Container>

    </div>
  )
}

export default Movies