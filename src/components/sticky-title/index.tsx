import React from 'react';
import './sticky-title.scss';
import { RouteProps } from 'react-router';

interface Props extends RouteProps {
  title?: string
}

const StickyTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="sticky-title">
      {title}
    </div>
  );
}
export default StickyTitle;