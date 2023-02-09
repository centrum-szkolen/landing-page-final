import React from 'react'
import styles from './About.module.css';
import { Link } from 'react-router-dom';
import img from '../../images/illustration-stay-productive.png'

const About = () => {
  return (
    <div className={styles.wrapper}>
        <div>
            <img src={img} alt="Stay productive vector graphics"/>
        </div>

        <div>
            <h3>Stay productive wherever your are</h3>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs</p>

            <p>Securely share files and folder with friends, family and colleagues for live collaboration. No email attachments required</p>

            <Link to="/">See how Fylo Works</Link>
        </div>
    </div>
  )
}

export default About