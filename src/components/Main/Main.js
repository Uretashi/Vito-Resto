import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
import RestoProposition from "../resto/RestoProposition/RestoProposition";
import luxuryResto from '../../assets/img/luxury_resto.jpg';

const restoTmp = ["resto1", "resto2", "resto3", "resto4"];

const Main = () => (
  <div className={styles.Main}>
    <section className={styles.restoDescription}>
        <img src={luxuryResto} alt=""/>
        <p>Mauris tristique et quam sed interdum. Mauris rutrum eu neque eu convallis. Mauris a lacus blandit, fringilla nisl in, finibus arcu. Maecenas neque lorem, convallis sed lorem sit amet, mollis facilisis odio. In hac habitasse platea dictumst. <br/> <br/> Quisque imperdiet diam lacus, non convallis risus aliquam vel. Duis ultrices elit libero, eget auctor elit bibendum ut. Aliquam aliquam, turpis eu eleifend finibus, mauris libero dignissim ante, at tincidunt augue sem eu sem. Curabitur dapibus sodales mollis. Integer ac elit urna. Cras sed accumsan orci. Mauris finibus lorem quis tellus mattis semper. Cras vitae purus v</p>
    </section>
    <section className={styles.reservation}>
        <button>Réserver</button>
        <button>Rejoindre</button>
    </section>
    <section>
      {restoTmp.map((value) => {
          return <RestoProposition restoName={value} />
      })}
    </section>
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
