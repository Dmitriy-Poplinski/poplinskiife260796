import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header:', () => {

    let data; 

    test('Header gets incorrect string', () => {
        data = 'testing_image';

        render(<Header image={data} />);

        expect(screen.getByTestId('header')).toHaveStyle('background: blue');
        expect(screen.getByTestId('header')).toMatchSnapshot();
    });

    test('Header gets correct string', () => {
        data = 'header_cover';

        render(<Header image={data} />);

        expect(screen.getByTestId('header')).toHaveStyle(`background: url("header_cover.jpg")`);
        expect(screen.getByTestId('header')).toMatchSnapshot();
    });
});
