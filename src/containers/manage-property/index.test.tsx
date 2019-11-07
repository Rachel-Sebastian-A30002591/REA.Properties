import React from "react";
import ReactDOM from "react-dom";
import ManagePropertyContainer from "../manage-property";

import { Provider } from "react-redux";
import { store } from "../../redux-core";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let mock: any = jest.fn();
const shallowWithStore = (component: any, store: any) => {
  const context = {
    store
  };
  return shallow(component, { context });
};

describe("ManagePropertyContainer", () => {
  it("should renders ManagePropertyContainer", () => {
    //  const store = createMockStore(mockState);
    const container = shallowWithStore(
      <Provider store={store}>
        <ManagePropertyContainer match={mock} location={mock} history={mock} />
      </Provider>,
      store
    );
    expect(container).toBeTruthy();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <ManagePropertyContainer match={mock} location={mock} history={mock} />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
