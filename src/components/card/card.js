import React from 'react';
import './styles.css';
const Card = (props) => {
      const {image, title, githubLink} = props;
      return(
        <div className="post">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <a href={githubLink}><button className="btn-reset btn-5">Visit Profile</button> </a>
        </div>
      )
}

export default Card;