import React from 'react';
import ProjectTile from './ProjectTile';

class Portfolio extends React.Component {
    render() {
      return (
        <section className="portfolio">
            <h2 className="portfolio__header">Portfolio</h2>
            <div className="portfolio__wrapper">            
                <ProjectTile title="Tesco Direct Inspire Me Templates" jobrole="UI Developer" url="#" />   
                <ProjectTile title="Tesco Direct Convergence" jobrole="Developer" url="#" />
                <ProjectTile title="Tesco Direct Module Library" jobrole="Developer" url="#" />
                <ProjectTile title="Southgate Cycling Club" jobrole="Designer &amp; UI Developer" url="#" />
                <ProjectTile title="Tesco F&amp;F Inspire Me" jobrole="UI Developer" url="#" />
                <ProjectTile title="Citi Rewards" jobrole="UI Developer" url="#" />
                <ProjectTile title="Joe Rodgers Sports Therapy" jobrole="Designer &amp; UI Developer" url="#" />
                <ProjectTile title="Virgin Media" jobrole="UI Developer" url="#" />
                <ProjectTile title="Holiday Extras" jobrole="UI Developer" url="#" />
                <ProjectTile title="New Love Club" jobrole="Designer &amp; UI Developer" url="#" />
                <ProjectTile title="Champion Print" jobrole="Designer &amp; UI Developer" url="#" />
            </div>
        </section>
        
               
      )
    }
  }

export default Portfolio;

