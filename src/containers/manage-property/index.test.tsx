import React from 'react';
import ReactDOM from 'react-dom';
import ManagePropertyContainer from '../manage-property';


import { Provider } from 'react-redux';
import { store } from '../../redux-core';
import { shallow, configure } from 'enzyme';

import { createMockStore } from 'redux-test-utils';
import { fetchProperties, addProperty, removeProperty } from '../../redux-core/actions';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


/* it('renders root container without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
    <ManagePropertyContainer />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
}); */
let mock: any = jest.fn();
const shallowWithStore = (component, store) => {
  const context = {
    store
  };
  return shallow(component, { context });
};

describe("ManagePropertyContainer", () => {
  const mockState = {
    result:[],
    saved:[]
  };
  



  it("should renders ManagePropertyContainer", () => {
    const store = createMockStore(mockState);
    const container = shallowWithStore(
      <Provider store={store}>
    <ManagePropertyContainer match = {mock}
      location = {mock}
      history= {mock} 
    />
     </Provider>, store);
    expect(container).toBeTruthy();
  });
});

/* fetchProperties={fetchProperties}
addProperty={addProperty} removeProperty={removeProperty} propertyReducer={{result:[],saved:[]}} */