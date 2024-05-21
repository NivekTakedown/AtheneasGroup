import React from 'react';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ServiceDetailsCard({id, title, description, imageUrl, altText, listItems, buttonText, buttonLink }) {
  return (
    <section id={id} className="service-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={imageUrl} alt={altText} className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h2>{title}</h2>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {listItems && (
              <ul>
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <a href={buttonLink} className="btn btn-primary">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetailsCard;