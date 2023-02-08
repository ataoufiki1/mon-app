

import { Component } from 'react';
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "8eef3163a3de0a73eaae8b08ef0357f1";

//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {

//state
  state = {
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
                
}

// pour appelé API
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
    const data = await api.json();
   console.log(data.name)

    if (city && country)
    {
       this.setState({
    tempreature: data.main.tem,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    error: ''
    })
    } else {
      this.setState({
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: 'SVP entrer des donnée'
      })
     }
  }
   
  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
           <Form getWeater={ this.getWeather} />
           <Weather
             tempreature = {this.state.tempreature}
             city = {this.state.city}
             country = {this.state.country}
             humidity = {this.state.humidity}
             description = {this.state.description}
             error= {this.state.error}
            />
       </div>
      </div>
    );
  }
}

export default App;
