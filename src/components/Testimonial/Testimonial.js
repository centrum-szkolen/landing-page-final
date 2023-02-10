import React from "react";
import styles from './Testimonial.module.css';
import PropTypes from 'prop-types';

const Testimonial = ({content, image, name,role}) => {
  return (
    <article className={styles.card}>
      <p className={styles.opinion}>
        {content}
      </p>
      <div className={styles.author}>
        <img alt={name} src={image} />
        <div>
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
    </article>
  );
};

Testimonial.propTypes = {
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    role: PropTypes.string
}

export default Testimonial;
