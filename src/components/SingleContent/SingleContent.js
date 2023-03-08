import React from 'react';
import { Link } from 'react-router-dom';
import './SingleContent.css';

const SingleContent = ({ item }) => {
    const rate = item.vote_average;
    return (
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
    )
}

export default SingleContent