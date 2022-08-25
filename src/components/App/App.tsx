import React, { useEffect, useState } from 'react';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

import classes from './App.module.css';

export function App() {
    const [ images, setImages ] = useState([
        'header_cover',
        'left_panel_cover',
        'main_body_cover',
        'right_panel_cover',
        'footer_cover'
    ]);

    const shuffleImageArray = () => {
        const newImages = images.sort(() => Math.random() - 0.5);
        setImages([...newImages]);
    };

    const main_images = [images[1], images[2], images[3]];

    useEffect(() => {
        const time = +(0.52 * 60 * 1000).toFixed(0);

        setInterval(shuffleImageArray, time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classes.app} data-testid="app">
            <Header image={images[0]}/>
            <Main images={main_images} shuffleImageArray={shuffleImageArray}/>
            <Footer image={images[4]}/>
        </div>
    );
}
