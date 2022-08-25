import React from 'react';

import classes from './Footer.module.css';

interface FooterProps {
    image: string
}

export function Footer({ image }: FooterProps) {
    let color;

    try {
        color = `url(${require(`../../assets/images/${image}.jpg`)})`; 
    } catch (e) {
        color = 'red'
    };

    return (
        <div 
            className={classes.footer__main}
            style={{
                background: color
            }}
            data-testid="footer"
        >
            Footer
        </div>
    );
}
