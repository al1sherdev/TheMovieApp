import React from 'react';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import './Navbar.css';

const translationEn = {
  trends: "Trends",
  movies: "Trendagilar",
}
const translationUz = {
  trends: "Movies",
  movies: "Kinolar",
}

i18n 
  .use(initReactI18next)
  .init( {
    resources: {
      en: { translation: translationEn },
      uz: { translation: translationUz },
    },
    lng: "uz",
    fallbackLng: "en",
    interpolation: { escapeValue: false }, 
  })

const Navbar = () => {
  const { t } = useTranslation();

  const onChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }   

  return (
    <div className='navbar d-flex px-4 py-2 align-content-center'>
      <Suspense fallback="Loading..."></Suspense>
      <Link to="/" className='logo'>
        TMDB 
      </Link>
      <ul className='nav_links d-flex justify-content-start'>
        <li className='nav_link'>
          <Link to="/trends/pages/1" >
            {t('Trends')}
          </Link>
        </li>
        <li className='nav_link'>
          <Link to="/movies/pages/1" >
          {t('Movies')}
          </Link>
        </li>
        <li className='nav_link'>
          <Link to="/series/pages/1" >
          {t('Series')}
          </Link>
        </li>
        <li className='nav_link'>
          <Link to="/search" >
          {t('Search')}
          </Link>
        </li>
      </ul>
      <div className='nav_addition'>
          <select className="form-select" name="language" onChange={onChange}>
            <option value={"en"}>En</option>
            <option value={"uz"}>Uz</option>
          </select>
      </div>
    </div>
  )
}

export default Navbar