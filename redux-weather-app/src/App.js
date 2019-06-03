import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";

const Api_Key = "0a4313d30ab706117f89c05e1048a50b";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    // const country = '';
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`);
    const response = await api_call.json();
    if (city) {
      if (response && parseInt(response.cod, 10) === 200) {
        this.setState({
          temperature: (response.main.temp - 273.15).toFixed(1) + ' Celsius',
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ""
        })
      } else {
        this.setState({
          temperature: "",
          city: "",
          country: "",
          humidity: "",
          description: "",
          error: "Can't find provided city / country."
        })
      }
    } else {
      this.setState({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please enter city and country."
      })
    }
  };

  render() {

    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Weather App</h1>
            <p className="lead">Get temperature, humidity and conditions for given city and country</p>
          </div>
        </div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-12">
                <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
