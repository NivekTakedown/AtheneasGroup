import React from 'react';
import '../styles.css';
import { Card, Button } from 'react-bootstrap';

function TeamMemberCard({ name, role, imageSrc, onClick }) {
  return (
    <div className="col mb-3">
      <Card className="h-100">
        <Card.Img src={imageSrc} className="card-img-top" alt="..." style={{ width: 'auto', height: '370px' }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{role}</Card.Text>
          <Button variant="primary" onClick={onClick}>
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TeamMemberCard;