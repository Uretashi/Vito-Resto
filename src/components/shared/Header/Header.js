import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import logo from '../../../assets/img/food.png';

const Header = () => (
  <div className={styles.Header}>
      <img className={styles.logo} src={logo} alt=""/>
      <nav>
          <ul>
              <li>Menu1</li>
              <li>Menu2</li>
              <li>Menu3</li>
              <li>Menu4</li>
              <li>Menu5</li>
              <li>Menu6</li>
          </ul>
      </nav>
      <div>
          <p>Profil utilisateur</p>
      </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
