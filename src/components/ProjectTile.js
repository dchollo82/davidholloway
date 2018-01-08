import React from 'react';

  const ProjectTile = (props) => {
    return (

      <a className="portfolio__item" href="{props.url}">
        <h3 className="portfolio__title">{props.title}</h3>
        <small className="portfolio__role">{props.jobrole}</small>
      </a>
      
    )
  }

export default ProjectTile;
