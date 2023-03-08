import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import { APIKEY } from '../context/config';
import { Wrap } from '../styled/styled';

const SingleMovie = () => {
    const api_key = useContext(APIKEY)
    const { id } = useParams()
    // states
    const [movie, setMovie] = useState({})
    const [videoKey, setVideoKey] = useState('')

    useEffect(() => {
      window.scroll(0, 0)
      getSingleMovie('movie')
      getVideo('movie')
    }, [])

    const getSingleMovie = async (type = 'movie') => {
      await  axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}&language=en-US`)
            .then(res => {
              setMovie(res.data)
            })
            .catch(err => {
              getSingleMovie('tv')
            })
    }
    
    const getVideo = async (type = 'movie') => {
      await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${api_key}&language=en-US`)
                  .then(res => {
                    setVideoKey(res.data.results[0].key)
                  })
                  .catch(err => {
                    getVideo('tv')
                  })
    }
    
  return (
    <div className='single_movie'>
      <Wrap bg_url={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`} >
        <div className="wrap_content">
          <Row>
            <Col xs="12" sm="12" md="4" xl="3">
              <div className="content_img">
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt="" />
              </div>
            </Col>
            <Col className='px-5' xs="12" sm="12" md="8" xl="9">
              <div className="movie_title">
                <h3>
                  {
                    movie.title
                  }
                </h3>
              </div>
              <div className='details d-flex justify-content-between'>
                <div className='release_date'>
                  <p>
                    Release Date:
                    {
                      movie.release_date
                    }
                  </p>
                </div>
                <div className="rating">
                  <p>
                    Rating: 
                    {
                      Math.round(movie.vote_average * 10) + '%'
                    }   
                  </p> 
                </div>
                <div className='runtime'>
                  <p>
                    Runtime: 
                    {
                      movie.runtime
                    } minut
                  </p>
                </div>
            </div>
              <div className='play_trailer'>
                  <a 
                    href={`https://www.youtube.com/watch?v=${videoKey}`} 
                    target="_blank"
                    rel='noreferrer'
                    className='play'
                  > 
                    <FaPlay></FaPlay>
                    Play Trailer
                </a>
              </div>
              <div className='overview'>
                {
                  movie.overview
                }
              </div>
              <div className='production_companies'>
                <p>Production Companies</p>
                  <h5>ALISHER STUDIOS</h5>
              </div>
            </Col>
          </Row>
        </div>
      </Wrap>
    </div>
  )
}

export default SingleMovie