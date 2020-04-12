import React from 'react';
import { IntlProvider } from 'react-intl';
import { render } from 'react-testing-library';

import GigsList from '../index';

describe('<GigsList />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<GigsList loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <GigsList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(queryByText(/Something went wrong/)).not.toBeNull();
  });

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(
      <GigsList gigs={false} error={false} loading={false} />,
    );

    expect(container.firstChild).toBeNull();
  });
});
