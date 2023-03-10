import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = () => {
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img
        variant="top"
        src="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Bharti ka gand</Card.Text>
        <Button variant="primary">Product Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
