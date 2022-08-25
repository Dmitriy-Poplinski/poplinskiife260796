import React from 'react';

import { MyButton } from '../Button/MyButton';

import classes from './MainBody.module.css';

interface MainBodyProps {
    image: string
    shuffleImageArray: () => void
}

export function MainBody({ image, shuffleImageArray }: MainBodyProps) {
    let color;

    try {
        color = `url(${require(`../../assets/images/${image}.jpg`)})`; 
    } catch (e) {
        color = 'violet'
    };

    return (
        <div 
            className={classes.main_body}
            style={{
                background: color
            }}
            data-testid="main_body"
        >
            <MyButton shuffleImageArray={shuffleImageArray}/>
        </div>
    );
}
