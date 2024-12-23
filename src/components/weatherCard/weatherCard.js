import React, { Component } from "react";
import Card from "../Card/card";
import TimezoneClock from "../../timezone";

const API_KEY = '2a74ce297a2e9df0b63fc72e907ac8ec';

class WeatherCard extends Component {
  
  state = {
    weatherData: ""
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
          weatherData: data
        });
      })
      .catch((error) => {
        console.error(`Error fetching weather data for ${city}:`, error);
      });
  };

  getWeatherImagePath = () => {
    const { weatherData } = this.state;
    if (weatherData && weatherData.main) {
      return weatherData.main.temp > 5
        ? 'src/assets/anna_clouds.svg'
        : 'src/assets/anna.svg';
    }
    return '/path/to/default-image.jpg';
  };

  render() {
    const { weatherData } = this.state;

    if (!weatherData || !weatherData.main) {
      return <div>Loading...</div>;
    }

    return (
      <Card
        location={`${weatherData.name}, ${weatherData.sys.country}`}
        time={<TimezoneClock timezone="Europe/Athens" />}
        temp={`${parseInt(weatherData.main.temp)}°C`}
        face={this.getWeatherImagePath()}
      />
    );
  }
}

export default WeatherCard;
