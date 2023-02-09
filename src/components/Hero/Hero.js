import React from 'react';
import styles from "./Hero.module.css";
import hero from "../../images/illustration-intro.png"
import Button from '../Button/Button';

const Hero = () => {
  return (
    <main className={styles.wrapper}>
        <img alt="Hero vector graphic" src={hero}/>
        <h1 className={styles.title}>All your fils in one secure location,<br/> accesibble anywhere</h1>
        <p className={styles.desc}>Fylo stores all your most important files in one secure location. Access them whereber you nedd, share and collaborate with friends family, and co-workers</p>
        <Button message="Get Started"/>

    </main>
  )
}

export default Hero