import React, { Component } from 'react';
import './Nav.css';
import { Link, Route } from "react-router-dom";

class Item extends Component {
  render() {
    const { to, text, exact } = this.props;
    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <Link to={to}>
            <li className={match ? "active" : ""}>
              {text}
            </li>
          </Link>
        )}
      />
    )
  }
}

class Nav extends Component {
  render() {
    return (
      <nav className="nav" >
        <ul className="nav__list">
          <Item to='/' exact={true} text='Home' />
          <Item to='/post' text='文章列表' />
          <Item to='/about' text='關於本站' />
        </ul>
        <div>{this.props.navText}</div>
      </nav>
    );
  }
}

export default Nav;
