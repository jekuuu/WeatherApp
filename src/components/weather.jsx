import React from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import WeatherIcon from "./weatherIcon";
var moment = require("moment");

const Weather = ({ weatherData, error, isLoading }) => {
  const roundTemp = temp => {
    return Math.round(temp * 10) / 10;
  };
  const content = isLoading ? (
    <>
      <Col lg={6} />
      <Col className="d-flex justify-content-between" lg={4}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Col>
    </>
  ) : error !== "404" ? (
    weatherData.map(data => (
      <Col lg={2} key={data.dt} className="mx-2 py-3">
        <Card style={{ width: "12.5rem", backgroundColor: "#212529" }}>
          <WeatherIcon e={data.weather[0].icon} />
          <Card.Body>
            <Card.Text style={{ color: "#fff", textTransform: "capitalize" }}>
              {data.weather[0].description}
            </Card.Text>
            <Card.Text style={{ color: "#fff" }}>
              {roundTemp(data.main.temp)}&#176;C
            </Card.Text>
            <Card.Text style={{ color: "#fff" }}>
              {moment.unix(data.dt).format("dddd, MMM D")}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))
  ) : (
    <>
      <Col lg={6} />
      <Col className="d-flex justify-content-between" lg={6}>
        <Alert variant="danger">City Not found</Alert>
      </Col>
    </>
  );

  return (
    <Container>
      <Row className="mt-3 ml-1">{content}</Row>
    </Container>
  );
};
export default Weather;
