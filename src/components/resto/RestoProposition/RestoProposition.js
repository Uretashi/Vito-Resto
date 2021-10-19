import React from 'react';
import PropTypes from 'prop-types';
import styles from './RestoProposition.module.css';

const RestoProposition = ({restoName}) => (
  <div className={styles.RestoProposition}>
    <p>{restoName}</p>
  </div>
);

RestoProposition.propTypes = {};

RestoProposition.defaultProps = {};

export default RestoProposition;
