import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
  <div>
    <h1>Expensify app</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Go to Home Page</NavLink>
    <NavLink to="/create" activeClassName="is-active">Go to Create Page</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Go to Edit Page</NavLink>
    <NavLink to="/help" activeClassName="is-active">Go to Help Page</NavLink>
  </div>
);

export default Header;
