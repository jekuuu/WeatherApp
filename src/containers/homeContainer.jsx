import React, { Component } from "react";
import Header from "../components/header";
import WeatherForm from "../components/form";
import Weather from "../components/weather";

var moment = require("moment");

export default class homeContainer extends Component {
  state = {
    error: "",
    weatherData: [],
    isLoading: false
  };

  //getWeather is a method we'll use to make the api call
  getWeather = async e => {
    const city = e.target.elements.city.value;

    e.preventDefault();
    this.setState({ isLoading: true });
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=b751f390d4e694d0bb82e1cd8180c2cf`
    );
    const response = await api_call.json();

    if (response.cod === "404") {
      this.setState({ error: response.cod, isLoading: false });
    } else {
      var weatherData = response.list;
      var bank = [];
      var today = moment().date();

      var newData = weatherData.filter(day => {
        var ApiDate = moment.unix(day.dt).date();

        if (ApiDate === today && bank.indexOf(ApiDate) > 0) {
          bank.push(ApiDate);
          return true;
        } else if (bank.indexOf(ApiDate) > -1) {
          return false;
        } else {
          bank.push(ApiDate);
          return true;
        }
      });

      this.setState({
        weatherData: newData,
        isLoading: false,
        error: ""
      });
      // console.log(this.state.weatherData);
    }
  };

  render() {
    return (
      <>
        <Header />
        <WeatherForm getWeather={this.getWeather} />
        <Weather
          weatherData={this.state.weatherData}
          error={this.state.error}
          isLoading={this.state.isLoading}
        />
      </>
    );
  }
}
