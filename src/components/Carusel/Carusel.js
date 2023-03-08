import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SingleContent from '../SingleContent/SingleContent';



const responsive = {
    0: { 
        items: 1
    },
    568: { 
        items: 2
    },
    768: { 
        items: 3
    },
    992: { 
        items: 4
    },
    1024: { 
        items: 5
    },
    1300: {
        items: 6, 
        itemsFit: 'contain'
    },
};

const Carusel = ({ contents, type }) => {
    let items = []
    if(type === 'home') {
        if(contents) {
            items = contents.map((item, index) => {
                return( <SingleContent key={index} item={item}  />)
        })
            return (
                <AliceCarousel 
                    className="carusel"
                    mouseTracking 
                    items={items}   
                    responsive={responsive}
                    disableButtonsControls
                    autoPlay
                    autoPlayInterval={1500}
                    animationDuration={1000}
                    infinite
                />
              );
        } else {
            console.log("Yoq")
        }
    } else {
        items = contents.map((item, index) => {
            return(
                <div className='single_movie_item' key={index}>
                    <img 
                        src={`https://www.themoviedb.org/t/p/138_and_h175_face${item.profile_path}`} 
                        alt={item.title} />
                </div>
            )
        })
    }
}


export default Carusel;