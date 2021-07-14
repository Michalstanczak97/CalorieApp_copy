import React from 'react';
import women from '../photos/women.png'
import '../scss/banner.scss'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__frame">
            <img src={women}/>
            <div className="banner__text">
                <p>Cześć</p>
                <h1>ZNAJDUJESZ SIĘ W STREFIE ZDROWIA</h1>
                <span>
                    Dowiesz się w niej więcej na temat matabolizmu.
                    Policzysz swoje zapotrzebowanie kaloryczne, wartość energetyczną spożywanych przez Ciebie produktów oraz zobaczysz na wykresie zestawienie tych danych</span>
            </div>
            </div>
        </div>
    );
};

export default Banner;