import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';


/**
 * @description This function controls the access to the specfied screen
 */
export const authGuardParam = {
  isAuthenticated: true,
  authenticate() {
    this.isAuthenticated = true
  },
  logout() {
    this.isAuthenticated = false
  }
}

interface IProps  {
  component: React.Component,
  path?: string,
}

/**
 * @description This route component can be used as a Route Guard for the specified screen/container component
 * @param {*} param  
 */
export const AuthGuard: React.FC<IProps>= ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => (
    authGuardParam.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/manage-property' />
  )} />
)

