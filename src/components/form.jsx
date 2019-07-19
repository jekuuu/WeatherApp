import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const WeatherForm = ({ getWeather }) => {
  return (
    <Container>
      <Form onSubmit={getWeather}>
        <Row className="justify-content-md-center mx-auto">
          <Col xs lg="1" />
          <Col xs lg="4" className="mt-3">
            <h3 style={{ color: "#0cf" }}>Get Weather Update</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center mx-auto mt-3">
          <Col xs lg="4" />
          <Col xs lg="4">
            <Form.Control
              type="text"
              placeholder="Enter City Name"
              name="city"
              size="sm"
              autoFocus={true}
            />
          </Col>
          <Col xs lg="4">
            <Button variant="dark" type="submit" size="sm">
              Get Weather
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default WeatherForm;
