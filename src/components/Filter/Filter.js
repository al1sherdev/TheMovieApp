import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { APIKEY } from '../../context/config';
import './Filter.css';

const Filter = ({ setSelectedGenres, selectedGenres }) => {
    const api_key = useContext(APIKEY)
    // states
    const [genresList, setGenresList] = useState([])
    
    useEffect(() => {
        getGenres()
    }, [])

    function getGenres() {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`)
            .then(res => {
                setGenresList(res.data.genres)
            })
            .catch(res => console.log(res))
    }

    // filter logika 
    function selectedHandle(selectedGenres) {
        let newGenresList = genresList.map((item) => {
            if(item.id === selectedGenres.id && selectedGenres.selected) {
                item.selected = false
            } else if(item.id === selectedGenres.id) {
                item.selected = true
            }
            return item
        })
        setGenresList(newGenresList)

        let newSelectedGenres = genresList.filter(item => {
            return item.selected === true
        })

        let ids = newSelectedGenres.map(item => {
            return item.id
        })
        setSelectedGenres(ids)
    }

  return (
    <div>
        <h3>Filter</h3>
        <ul className='genres_list'>
            {
               genresList.map((item, index) => {
                return (
                    <li 
                        className={`${item.selected ? 'genre is-selected' : "genre"}`} 
                        key={index}
                        onClick={() => selectedHandle(item)}
                    >
                        {item.name}
                    </li>
                    )
               }) 
            }
        </ul>
    </div>
  )
}

export default Filter
