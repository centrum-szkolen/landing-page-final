import React from 'react';
import styles from './Card.module.css';

const Card = ({image,title,desc}) => {
  return (
    <article className={styles.wrapper}>
        <img alt={title} src={image}/>
        <h3>{title}</h3>
        <p>{desc}</p>
    </article>
  )
}

export default Card