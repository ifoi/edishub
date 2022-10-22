import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ResourceCard() {
  return (
    <Card bg="light" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name of Resource</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go to Resource</Button>
      </Card.Body>
    </Card>
  );
}

export default ResourceCard;