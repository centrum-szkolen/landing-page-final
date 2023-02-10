import React from "react";
import styles from "./Testimonials.module.css";
import profile1 from "../../images/profile-1.jpg";
import profile2 from "../../images/profile-2.jpg";
import profile3 from "../../images/profile-3.jpg";
import quotesImg from "../../images/bg-quotes.png";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.quotes} src={quotesImg} alt="" />
      <Testimonial
        content="Fylo has iproved our team productivity by an order of magnitude. Since
          making the switch our team has become a well-oiled collaboration
          machine"
        name="Jan Kowalski"
        role="CEO Founder"
        image={profile1}
      />
      <Testimonial
        content="Fylo has iproved our team productivity by an order of magnitude. Since
          making the switch our team has become a well-oiled collaboration
          machine"
        name="Jan Kowalski"
        role="CEO Founder"
        image={profile2}
      />
      <Testimonial
        content="Fylo has iproved our team productivity by an order of magnitude. Since
          making the switch our team has become a well-oiled collaboration
          machine"
        name="Jan Kowalski"
        role="CEO Founder"
        image={profile3}
      />
    </div>
  );
};

export default Testimonials;
