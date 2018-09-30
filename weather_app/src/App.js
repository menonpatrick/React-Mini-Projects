import React from 'react';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';
import './App.css';




const API_KEY = "ecdc081dc3cc1a675e369bf545cc3300";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind_speed: undefined,
    error: undefined
  } // state ends

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // fetching the api
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    
    // converting it into JSON
    const data = await api_call.json();

    console.log(data);


    // checking if the city and country is available
    if(city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind_speed: data.wind.speed,
        error: ''
      }); // this.setState ends
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind_speed: undefined,
        error: 'Please enter both, the city and the country'
      }); // this.setState ends
    } // else ends

  } // getWeather function ends

  render() {
    return (
      <div className="container">
        <div className="parent-title">
          <div className="image"></div>
          <div className="title"><Title /></div>
        </div>

        <div className="form">
          <Form getWeather={this.getWeather.bind(this)} />
        

          <div className="weather">
            <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            wind_speed={this.state.wind_speed}
            error={this.state.error} />
          </div>
        </div>

      </div> // container ends
    ); // return ends
  } // render function ends

} // class App ends


export default App;