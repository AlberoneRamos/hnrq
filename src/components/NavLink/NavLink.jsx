// @flow
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';
import './NavLink.scss';

type Props = {
  // Children elements
  children: React$Element<any>,
  // String array or single string of classNames
  classList: Array<string> | string,
  // NavLink destination
  to: string,
  // extra pixels to scroll
  offset: number
}

const NavLink = ({ 
  children, 
  classList, 
  to,
  offset
}: Props) => {
  return (
    <Link  
      to={to} 
      smooth
      offset={offset}
      className={classNames("nav-link px-4 mx-3", classList)}
      spy
      hashSpy
      data-testid="nav-link"
    >
      {children}
    </Link>
  );
};

export default NavLink;