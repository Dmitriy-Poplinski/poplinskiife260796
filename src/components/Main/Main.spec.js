import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main:', () => {

    let data; 

    test('Main gets array', () => {
        data = ['testing_image', 'testing_image_2', 'testing_image_3'];

        render(<Main images={data} />);

        expect(screen.getByTestId('main')).toMatchSnapshot();
    });
});
