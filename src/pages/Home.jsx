import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { APIKEY } from '../context/config';
import { Container } from 'react-bootstrap';
// Components
import Carusel from '../components/Carusel/Carusel';
import TypeTitle from '../components/TypeTitle/TypeTitle';

const Home = () => {
    // api key
    const api_key = useContext(APIKEY)
    // states
    const [trends, setTrends] = useState();
    const [movies, setMovies] = useState();
    const [series, setSeries] = useState();

    useEffect(() => {
        getTrends()
        getMovies()
        getSeries()
    }, [])

    // trends
    async function getTrends() {
        await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&&page=1`)
                    .then(res => {
                        setTrends(res.data.results)
                    })
                    .catch(err => console.log(err))
      }

    // movies
      async function getMovies() {
        await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=&with_genres=`)
        
                    .then(res => {
                      setMovies(res.data.results)
                    })
                    .catch(err => console.log(err))
                    
              
      }

    // series
      async function getSeries() {
        await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=&with_genres=`)
                    .then(res => {
                        setSeries(res.data.results)
                    })
                    .catch(err => console.log(err))
      }

  return (
    <div className='home main'>
      <div className="wrap">
        <div className="wrap_content">
        <h1>Welcome</h1>
        <span>Millions of movies, TV shows and people to discover. Explore now.</span>
        </div>
      </div>
        <Container>
            <div className='category_box'>
                <TypeTitle title="Trending" />
                <Carusel contents={trends} type="home" />
            </div>
            <div className='category_box'>
                <TypeTitle title="Movies" />
                <Carusel contents={movies} type="home" />
            </div>
            <div className='category_box'>
                <TypeTitle title="Series" />
                <Carusel contents={series} type="home" />
            </div>
        </Container>
    </div>
  )
}

export default Home
