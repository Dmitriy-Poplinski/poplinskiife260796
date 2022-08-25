import { render, screen } from '@testing-library/react';

import { LeftPanel } from './LeftPanel';

describe('LeftPanel:', () => {

    let data; 

    test('LeftPanel gets incorrect string', () => {
        data = 'testing_image';

        render(<LeftPanel image={data} />);

        expect(screen.getByTestId('left_panel')).toHaveStyle('background: orange');
        expect(screen.getByTestId('left_panel')).toMatchSnapshot();
    });

    test('LeftPanel gets correct string', () => {
        data = 'left_panel_cover';

        render(<LeftPanel image={data} />);

        expect(screen.getByTestId('left_panel')).toHaveStyle(`background: url("left_panel_cover.jpg")`);
        expect(screen.getByTestId('left_panel')).toMatchSnapshot();
    });
});
