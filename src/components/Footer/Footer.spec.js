import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer:', () => {

    let data; 

    test('Footer gets incorrect string', () => {
        data = 'testing_image';

        render(<Footer image={data} />);

        expect(screen.getByTestId('footer')).toHaveStyle('background: red');
        expect(screen.getByTestId('footer')).toMatchSnapshot();
    });

    test('Footer gets correct string', () => {
        data = 'footer_cover';

        render(<Footer image={data} />);

        expect(screen.getByTestId('footer')).toHaveStyle(`background: url("footer_cover.jpg")`);
        expect(screen.getByTestId('footer')).toMatchSnapshot();
    });
});
