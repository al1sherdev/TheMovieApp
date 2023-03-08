import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { APIKEY } from '../context/config';

const Search = () => {
  const api_key = useContext(APIKEY);
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);

  const searchResults = (e) => {
    e.preventDefault()
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&page=1&query=${value}&include_adult=false`)
      .then(res => {
        setResults(res.data.results)
      })
      .catch(err => console.log(err))
  }

  const getValue = (e) => {
    setValue(e.target.value)
  }

  const rate = results.vote_average;

  return (
    <div className='search main d-flex justify-content-center'>
      <Container>
          <Row>
            <form onSubmit={searchResults}>
              <input 
                className='w-100 p-2'
                type="search" 
                name="search"
                placeholder='search'
                onChange={getValue}
                autoComplete="off"
              />
            </form>
          </Row>
          <Row className='gy-5'>
            {
              results.length >= 0 ? (
                results.map(item => {
                  return(
                    <Col key={item.id} xs="12" sm="6" lg="4" xl="3">
                      <Link to={`/single-movie/${item.id}`} className='single_content'>
                        <div className='single_content-box'>
                            <div className='single_content_head'>
                                <img 
                                    src={
                                        item.poster_path ? (
                                        `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`
                                        ) : ('https://www.google.com/search?q=image&tbm=isch&ved=2ahUKEwif3MbN7I39AhWpk_0HHdFOAHkQ2-cCegQIABAA&oq=image&gs_lcp=CgNpbWcQA1C9CljqEWC4FGgAcAB4AIABAIgBAJIBAJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=3rznY5_1PKmn9u8P0Z2ByAc#imgrc=-VCM1w56w6u5VM')
                                        }
                                    alt={item.title || item.name} />
                                    <span className={rate * 10 > 75 ? "rate rate-trend" : "rate rate-medium"}>
                                    {
                                        Math.round(item.vote_average * 10) + '%'
                                    }
                                </span>
                            </div>
                            <div className='single_content_body'>
                                <h2>
                                    {
                                        item.title || item.name
                                    }
                                </h2>
                                <p>
                                    {
                                    item.release_date || item.first_air_date
                                    }
                                </p>
                            </div>
                        </div>
                      </Link>
                    </Col>
                  )
                })
              ) : (
                <div className='my-5 d-flex justify-content-center align-items-center'>
                  <h3>No Movie</h3>
                </div>
              )
            }
          </Row>
      </Container>
    </div>
  )
}

export default Search