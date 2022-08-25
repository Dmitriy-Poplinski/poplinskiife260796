import React from 'react';

import classes from './RightPanel.module.css';

interface RightPanelProps {
    image: string
}

export function RightPanel({ image }: RightPanelProps) {
    let color;

    try {
        color = `url(${require(`../../assets/images/${image}.jpg`)})`; 
    } catch (e) {
        color = 'maroon'
    };

    return (
        <div 
            className={classes.right_panel}
            style={{
                background: color
            }}
            data-testid="right_panel"
        >
            Right Panel
        </div>
    );
}
