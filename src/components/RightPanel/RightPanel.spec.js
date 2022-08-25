import { render, screen } from '@testing-library/react';

import { RightPanel } from './RightPanel';

describe('RightPanel:', () => {

    let data; 

    test('RightPanel gets incorrect string', () => {
        data = 'testing_image';

        render(<RightPanel image={data} />);

        expect(screen.getByTestId('right_panel')).toHaveStyle('background: maroon');
        expect(screen.getByTestId('right_panel')).toMatchSnapshot();
    });

    test('RightPanel gets correct string', () => {
        data = 'right_panel_cover';

        render(<RightPanel image={data} />);

        expect(screen.getByTestId('right_panel')).toHaveStyle(`background: url("right_panel_cover.jpg")`);
        expect(screen.getByTestId('right_panel')).toMatchSnapshot();
    });
});
