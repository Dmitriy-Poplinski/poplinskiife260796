import { render, screen } from '@testing-library/react';

import { MainBody } from './MainBody';

describe('MainBody:', () => {

    let data; 

    test('MainBody gets incorrect string', () => {
        data = 'testing_image';

        render(<MainBody image={data} />);

        expect(screen.getByTestId('main_body')).toHaveStyle('background: violet');
        expect(screen.getByTestId('main_body')).toMatchSnapshot();
    });

    test('MainBody gets correct string', () => {
        data = 'main_body_cover';

        render(<MainBody image={data} />);

        expect(screen.getByTestId('main_body')).toHaveStyle(`background: url("main_body_cover.jpg")`);
        expect(screen.getByTestId('main_body')).toMatchSnapshot();
    });
});
