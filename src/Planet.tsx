import React, { useEffect } from 'react';
import './Planet.css';
import planetlogic from './PlanetScript';

function Planet() {
    useEffect(() => {
        planetlogic();
      }, []);
    return (
        <div className='planet'>
            <canvas id="canvas"></canvas>
        </div>
    );
}

export default Planet;
