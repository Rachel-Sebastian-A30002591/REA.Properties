import React from 'react';
import './header.scss';
import { RouteProps } from 'react-router';

interface Props extends RouteProps {
  title?: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="app-header">
      <div className="title">{title}</div>
    </div>
  );
}
export default Header;