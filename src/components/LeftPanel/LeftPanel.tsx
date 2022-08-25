import React from 'react';

import classes from './LeftPanel.module.css';

interface LeftPanelProps {
    image: string
}

export function LeftPanel({ image }: LeftPanelProps) {
    let color;

    try {
        color = `url(${require(`../../assets/images/${image}.jpg`)})`; 
    } catch (e) {
        color = 'orange'
    };

    return (
        <div 
            className={classes.left_panel}
            style={{
                background: color
            }}
            data-testid="left_panel"
        >
            Left Panel
        </div>
    );
}
