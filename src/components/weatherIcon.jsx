import React from "react";

const WeatherIcon = ({ e }) => {
  if (e === "10n" || e === "10d" || e === "9n" || e === "9d") {
    return (
      <div className="icon rainy">
        <div className="cloud" />
        <div className="rain" />
      </div>
    );
  } else if (
    e === "02d" ||
    e === "02n" ||
    e === "03d" ||
    e === "03n" ||
    e === "04d" ||
    e === "04n"
  ) {
    return (
      <div className="icon cloudy">
        <div className="cloud" />
        <div className="cloud" />
      </div>
    );
  } else if (e === "13n" || e === "13d") {
    return (
      <div className="icon flurries">
        <div className="cloud" />
        <div className="snow">
          <div className="flake" />
          <div className="flake" />
        </div>
      </div>
    );
  } else if (e === "01n" || e === "01d") {
    return (
      <div className="icon cloudy">
        <div className="cloud" />
        <div className="cloud" />
      </div>
    );
  } else if (e === "11n" || e === "11d") {
    return (
      <div className="icon thunder-storm">
        <div className="cloud" />
        <div className="lightning">
          <div className="bolt" />
          <div className="bolt" />
        </div>
      </div>
    );
  } else if (e === "50n" || e === "50d") {
    return "mist";
  } else {
    return (
      <div className="icon sunny">
        <div className="sun">
          <div className="rays" />
        </div>
      </div>
    );
  }
};

export default WeatherIcon;
