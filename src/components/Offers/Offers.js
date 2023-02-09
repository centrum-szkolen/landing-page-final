import React from 'react';
import styles from './Offers.module.css';
import Card from '../Card/Card';
import img1 from '../../images/icon-access-anywhere.svg';

const Offers = () => {
  return (
    <div className={styles.wrapper}>
        <Card image={img1} title="Acces your file, anywhere" desc="Fylo stores all your most important files in one secure location. Access them whereber you nedd, share and collaborate with friends family, and co-workers"/>
        <Card image={img1} title="Security you can trust" desc="Fylo stores all your most important files in one secure location. Access them whereber you nedd, share and collaborate with friends family, and co-workers"/>
        <Card image={img1} title="Real time collaboration" desc="Fylo stores all your most important files in one secure location. Access them whereber you nedd, share and collaborate with friends family, and co-workers"/>
        <Card image={img1} title="Store any type of file" desc="Fylo stores all your most important files in one secure location. Access them whereber you nedd, share and collaborate with friends family, and co-workers"/>
    </div>
  )
}

export default Offers