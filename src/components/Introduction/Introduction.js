import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import backgroundImage from '../../images/introduction-background.jpg';

const Introduction = () => {
  return (
    <div
      style={{
        height: '40vh',
        width: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <h1 style={{ color: 'white'}} className='display-4'>Atrévete a programar.</h1>
    </div>
  );
};

export default Introduction;