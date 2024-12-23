import React, { Component } from "react";
import "./weather.css";

const API_KEY = "2a74ce297a2e9df0b63fc72e907ac8ec";

class Weather extends Component {
  state = {
    weatherData: "",
  };

  componentDidMount() {
    this.fetchWeatherData(this.props.city);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this.fetchWeatherData(this.props.city);
    }
  }

  fetchWeatherData = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          weatherData: data,
        });
      })
      .catch((error) => {
        console.error(`Error fetching weather data for ${city}:`, error);
      });
  };

  getWeatherFace = () => {
    const { weatherData } = this.state;
    const { face } = this.props;

    if (weatherData.weather.length > 0) {
      const mainWeather = weatherData.weather[0].main;

      // Customize face image based on main weather condition
      if (mainWeather === "Clouds") {
        return `${face}_clouds.svg`;
      } else if (mainWeather === "Rain") {
        return `${face}_rain.svg`;
      } else if (mainWeather === "Snow") {
        return `${face}_snow.svg`;
      } else if (mainWeather === "Drizzle") {
        return `${face}_drizzle.svg`;
      } else {
        // Default face image if no specific condition
        return `${face}.svg`;
      }
    }

    // Default face image if weather data is not available
    return `${face}.svg`;
  };

  render() {
    const { weatherData } = this.state;

    if (!weatherData || !weatherData.main) {
      return <div>Loading...</div>;
    }

    return (
      <div className="card">
        <div className="card-top">
          <p>{this.props.location}</p>
          <p>{this.props.time}</p>
        </div>
        <div className="card-face">
          <img
            className="face"
            src={`assets/${this.getWeatherFace()}`}
            alt="Weather Icon"
          />
        </div>
        <div className="card-btm">
          <p className="tempcondition">{parseInt(weatherData.main.temp)}°C</p>
          <p className="tempcondition">
            {weatherData.weather.length > 0 && weatherData.weather[0].main}
          </p>
        </div>
      </div>
    );
  }
}

export default Weather;
