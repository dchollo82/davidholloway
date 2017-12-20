import React from 'react';
import ProjectTile from './ProjectTile';

class Portfolio extends React.Component {
    render() {
      return (
        <section className="portfolio">
            <h2 className="portfolio__header">Portfolio</h2>
            <div className="portfolio__wrapper">            
                <ProjectTile title="Tesco Direct Inspire Me Templates" role="UI Developer" url="#" />   
                <ProjectTile title="Tesco Direct Convergence" role="Developer" url="#" />
                <ProjectTile title="Tesco Direct Module Library" role="Developer" url="#" />
                <ProjectTile title="Southgate Cycling Club" role="Designer &amp; UI Developer" url="#" />
                <ProjectTile title="Tesco F&amp;F Inspire Me" role="UI Developer" url="#" />
                <ProjectTile title="Citi Rewards" role="UI Developer" url="#" />
                <ProjectTile title="Joe Rodgers Sports Therapy" role="Designer &amp; UI Developer" url="#" />
                <ProjectTile title="Virgin Media" role="UI Developer" url="#" />
                <ProjectTile title="Holiday Extras" role="UI Developer" url="#" />
                <ProjectTile title="New Love Club" role="Designer &amp; UI Developer" url="#" />
                <ProjectTile title="Champion Print" role="Designer &amp; UI Developer" url="#" />
            </div>
        </section>
        
               
      )
    }
  }

export default Portfolio;

