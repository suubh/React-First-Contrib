import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './styles.css';
const Card = (props) => {
      const {image, title, githubLink} = props;
      return(
        <div className="post">
          <div className="image-div"><img src={image} alt={title} /></div>
       
         
            
            <h2 className="title">{title}</h2>
            
            <a href={githubLink}><FaGithub  className="icons" /> </a>
            
        </div>
      )
}

export default Card;