import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../Redux/Auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  const isLoggedInUser = useSelector(getIsLoggedIn);
  return (
    <nav>
      {isLoggedInUser && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
