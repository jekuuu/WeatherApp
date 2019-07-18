import React, { Component } from "react";
import Header from "../components/header";
import Form from "../components/form";
import Weather from "../components/weather";

export default class homeContainer extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  //getWeather is a method we'll use to make the api call
  getWeather = async e => {
    const city = e.target.elements.city.value;

    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b751f390d4e694d0bb82e1cd8180c2cf`
    );
    const response = await api_call.json();
    console.log(response);
    if (city) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,

        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please input search values..."
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <div>
          <Form getWeather={this.getWeather} />
          <Weather />
        </div>
      </>
    );
  }
}
