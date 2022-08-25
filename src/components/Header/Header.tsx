import React from 'react';

import classes from './Header.module.css';

interface HeaderProps {
    image: string
}

export function Header({ image }: HeaderProps) {
    let color;

    try {
        color = `url(${require(`../../assets/images/${image}.jpg`)})`; 
    } catch (e) {
        color = 'blue'
    };

    return (
        <div 
            className={classes.header__main}
            style={{
                background: color
            }}
            data-testid="header"
        >
            Header
        </div>
    );
}
