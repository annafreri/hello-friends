import React, { Component } from "react";

const API_KEY = '2a74ce297a2e9df0b63fc72e907ac8ec';

class Weather extends Component {
  state = {
    weatherData: ""
  };

  componentDidMount() {
    // Fetch weather data for the specified city when the component mounts
    this.fetchWeatherData(this.props.city);
  }

  componentDidUpdate(prevProps) {
    // Fetch new weather data if the city prop has changed
    if (prevProps.city !== this.props.city) {
      this.fetchWeatherData(this.props.city);
    }
  }

  fetchWeatherData = (city) => {
    // console.log(`Fetching weather data for ${city}...`);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          weatherData: data
        });
      })
      .catch((error) => {
        // console.error(`Error fetching weather data for ${city}:`, error);
      });
  };

  render() {
    // console.log("Rendering component", this.state.weatherData);

    const { weatherData } = this.state;

    if (!weatherData || !weatherData.main) {
      return <div>Loading...</div>; // or any other loading indicator
    }

    return (
      <div>
        {/* {weatherData.name} */}
        {parseInt(weatherData.main.temp)}°C
      </div>
    );
  }
}

export default Weather;
