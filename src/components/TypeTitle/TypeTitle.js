import React from 'react';
import { Link } from 'react-router-dom';
import './TypeTitle.css';

const TypeTitle = ({title}) => {
  return (
    <div className='title'>
        <Link to="/trends/pages/1">{title}</Link>
    </div>
  )
}

export default TypeTitle