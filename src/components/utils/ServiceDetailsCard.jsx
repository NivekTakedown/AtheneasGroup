import React from 'react';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ServiceDetailsCard({serviceId, imageContainerClass, detailsContainerClass, serviceTitle, serviceDescription, serviceImage, altText, serviceListItems, buttonText, buttonLink }) {
  return (
    <section id={serviceId} className="service-details">
      <div className="container">
        <div className="row">
          <div className={imageContainerClass}>
            <img src={serviceImage} alt={altText} className="img-fluid" />
          </div>
          <div className={detailsContainerClass}>
            <h2>{serviceTitle}</h2>
            {serviceDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {serviceListItems && (
              <ul>
                {serviceListItems.map((item, index) => (
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