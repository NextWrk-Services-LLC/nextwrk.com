import React from 'react';
import { render } from 'react-testing-library';

import H12 from '../index';

describe('<H12 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<H12 id={id} />);
    expect(container.querySelector('H12').id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<H12>{children}</H12>);
    const { childNodes } = container.querySelector('H12');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
