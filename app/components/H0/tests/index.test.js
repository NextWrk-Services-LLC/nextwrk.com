import React from 'react';
import { render } from 'react-testing-library';

import H0 from '../index';

describe('<H0 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<H0 id={id} />);
    expect(container.querySelector('H0').id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<H0>{children}</H0>);
    const { childNodes } = container.querySelector('H0');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
