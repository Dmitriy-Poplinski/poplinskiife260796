import { render, screen } from '@testing-library/react';

import { MyButton } from './MyButton';

describe('MyButton:', () => {
    test('MyButton snapshot', () => {
        render(<MyButton onClick={() => {}}/>);

        expect(screen.getByTestId('button')).toMatchSnapshot();
    });
});
