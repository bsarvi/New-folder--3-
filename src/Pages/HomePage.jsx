import React from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../components/Product";

const HomePage = ({ products }) => {
  return (
    <>
      <Container>
        <h1 style={{ marginTop: "1rem" }}> Featured Books</h1>
        <h4
          style={{
            color: "green",
            fontWeight: 600,
            marginLeft: "0.5rem",
            opacity: "0.5",
            marginBottom: "1rem",
          }}
        >
          Enriching your reading lists!
        </h4>
        <Row xs={1} md={3} className="gy-5">
          {products.map((product) => {
            return <Product product={product} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
