import React from 'react';
import ReactDOM from 'react-dom';
import StickyTitle from '../sticky-title';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StickyTitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
