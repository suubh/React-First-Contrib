import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";

import "./styles.css";
const Card = (props) => {
  const { image, title, githubLink, linkedinLink, twitterLink } = props;
  return (
    <div className="post">
      <div className="image-div">
        <img src={image} alt={title} />
      </div>

      <h2 className="title">{title}</h2>

      <a href={githubLink}>
        <FaGithub size={40} className="icons" />
      </a>
      <a href={linkedinLink}>
        <TiSocialLinkedin size={2} className="icons" />
      </a>
      <a href={twitterLink}>
        <AiFillTwitterCircle className="icons" />
      </a>
    </div>
  );
};

export default Card;
