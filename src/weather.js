import React, { Component } from "react";

const API_KEY = '2a74ce297a2e9df0b63fc72e907ac8ec';

class Weather extends Component {
  
  state = {
    weatherData: ""
  };
  

  componentDidMount() {
    // Fetch weather data for the specified city when the component mounts
    this.fetchWeatherData(this.props.city);
    // this.fetchWeatherData(this.props.mainWeather);
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
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
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
    
    // if(weatherData.weather.length > 0 && weatherData.weather[0].main =="Clouds" ){
    //   return true;
    // }

    return (
      [<div>
        {/* {weatherData.name} */}
        {parseInt(weatherData.main.temp)}°C
        {weatherData.weather.length > 0 && weatherData.weather[0].main}
      </div>,
      ]
    );
  }
}

export default Weather;


//example of json
// {"coord":{"lon":8.9821,"lat":45.8674},
// "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
// "base":"stations",
// "main":{"temp":4.75,"feels_like":4.75,"temp_min":2.35,"temp_max":6.65,"pressure":1034,"humidity":40},"visibility":10000,
// "wind":{"speed":0.51,"deg":0},"clouds":{"all":0},"dt":1705835157,
// "sys":{"type":1,"id":6936,"country":"CH","sunrise":1705820270,"sunset":1705853529},
// "timezone":3600,"id":2659689,"name":"Mendrisio","cod":200}