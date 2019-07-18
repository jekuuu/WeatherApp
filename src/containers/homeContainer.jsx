import React, { Component } from "react";
import Header from "../components/header";
import Form from "../components/form";
import Weather from "../components/weather";
import { Container } from "@material-ui/core";
var moment = require("moment");

export default class homeContainer extends Component {
  state = {
    error: undefined,
    weatherData: []
  };
  //getWeather is a method we'll use to make the api call
  getWeather = async e => {
    const city = e.target.elements.city.value;

    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=b751f390d4e694d0bb82e1cd8180c2cf`
    );
    const response = await api_call.json();

    var weatherData = response.list;
    var bank = [];
    var today = moment().date();

    var newData = weatherData.filter(day => {
      var ApiDate = moment.unix(day.dt).date();
      if (ApiDate === today) {
        return false;
      } else if (bank.indexOf(ApiDate) > -1) {
        return false;
      } else {
        bank.push(ApiDate);
        return true;
      }
    });

    this.setState({
      weatherData: newData
    });
    console.log(this.state.weatherData);
  };

  render() {
    return (
      <>
        <Header />

        <Container maxWidth="xs">
          <Form getWeather={this.getWeather} />
        </Container>
        <Weather weatherData={this.state.weatherData} />
      </>
    );
  }
}
