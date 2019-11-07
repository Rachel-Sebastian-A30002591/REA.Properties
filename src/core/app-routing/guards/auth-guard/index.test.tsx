import React from 'react';
import ReactDOM from 'react-dom';
import { AuthGuard, authGuardParam } from '../auth-guard';
import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


configure({ adapter: new Adapter() })


  

  it('renders without crashing Guard for authenticated state', () => {
    authGuardParam.authenticate();
    const div = document.createElement('div');
    const ComponentToMock: any = ({ }) => <div>Mock Component</div>;
    ReactDOM.render(
      <Router>
        <Switch>

          <AuthGuard path="/manage-property" component={ComponentToMock} />
          <Redirect from="/" to="/manage-property" />
        </Switch>
      </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing Guard for unautherized state', () => {
    authGuardParam.logout();
    const div = document.createElement('div');
    const ComponentToMock: any = ({ }) => <div>Mock Component</div>;
    ReactDOM.render(
      <Router>
        <Switch>

          <AuthGuard path="/manage-property" component={ComponentToMock} />
          <Redirect from="/" to="/manage-property" />
        </Switch>
      </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });






