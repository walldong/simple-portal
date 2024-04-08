import React from "react";
import { Row, Col, Card } from "antd";

const { Meta } = Card;

const products = [
  {
    name: "Product 1",
    description: "Description for Product 1",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 2",
    description: "Description for Product 2",
    image: "https://via.placeholder.com/150",
  },
  // Add more products as needed
];

const Product = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} />}
            >
              <Meta title={product.name} description={product.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Product;
