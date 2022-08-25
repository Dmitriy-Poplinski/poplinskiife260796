import React from 'react';

import { LeftPanel } from '../LeftPanel/LeftPanel';
import { MainBody } from '../MainBody/MainBody';
import { RightPanel } from '../RightPanel/RightPanel';

import classes from './Main.module.css';

interface MainProps {
    images: string[],
    shuffleImageArray: () => void
}

export function Main({ images, shuffleImageArray }: MainProps) {
    const [ left_panel_image, main_body_image, right_panel_image ] = images;

    return (
        <div className={classes.main} data-testid='main'>
            <LeftPanel image={left_panel_image}/>
            <MainBody image={main_body_image} shuffleImageArray={shuffleImageArray}/>
            <RightPanel image={right_panel_image}/>
        </div>
    );
}
