import { render, screen } from '@testing-library/react';

import App from './App';

describe('App:', () => {
    test('App snapshot', () => {
        render(<App />);

        expect(screen.getByTestId('app')).toMatchSnapshot();
    });
});
