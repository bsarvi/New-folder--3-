import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Cart3 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  console.log(product);
  return (
    <Col style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
      <Link to={`/product/${product.id}`}>
        <Card
          style={{
            width: "11rem",
            height: "16rem",
            flexDirection: "row",
            padding: 0,
            border: "1px solid #333",
          }}
        >
          <Card.Img variant="top" src={product.imgUrl} />

          <Card.Body
            style={{
              width: "12rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "0 1rem",
              border: "2px solid #333",
            }}
          >
            <Card.Title style={{ width: "12rem" }}>{product.name}</Card.Title>
            <Card.Subtitle style={{ color: "#777", fontSize: "16px" }}>
              {product.miniDesc}
            </Card.Subtitle>
            <Rating rating={product.rating} reviews={product.reviews} />
            <Card.Footer>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Card.Text style={{ fontWeight: 800 }}>
                  ₹ {product.price}
                </Card.Text>
                <Button>
                  <Cart3 />
                </Button>
              </div>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Product;
