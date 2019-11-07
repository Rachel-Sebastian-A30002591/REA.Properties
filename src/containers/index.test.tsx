import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from '../containers';


import { Provider } from 'react-redux';
import { store } from '../redux-core';


it('renders root container without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
    <RootContainer />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
