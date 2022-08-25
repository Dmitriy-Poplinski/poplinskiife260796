import React from 'react';

import classes from './MyButton.module.css';

interface MyButtonProps {
    shuffleImageArray: () => void
}

export function MyButton({ shuffleImageArray }: MyButtonProps) {
  return (
    <button className={classes.button} onClick={() => shuffleImageArray()} data-testid="button">
        Click me
    </button>
  );
}
