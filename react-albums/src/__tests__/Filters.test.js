import React from 'react';
import { render, getByLabelText, prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filters from 'components/Filters';

describe.skip('Filters', () => {
  test('it renders without crashing', () => {
    render(<Filters />);
  });

  test('it renders with a filter', () => {
    // render function
    // get queries from the render
    const { debug, getByLabelText } = render(
      <Filters filters={{ Single: true }} />,
    );

    // targeting the checkbox on the dom
    const checkbox = getByLabelText('Single');

    console.log(prettyDOM(checkbox));

    expect(checkbox).toHaveAttribute('checked');
  });
});
