import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div className="weather-info mt-3">
                <div className="card">
                        {
                            this.props.country && this.props.city && <div className="card-header"><span className="weather__key">Location:
                                <span className="weather__value">  {this.props.city}, {this.props.country}</span>
                            </span></div>
                        }

                    <ul className="list-group list-group-flush">

                {
                    this.props.temperature && <li className="list-group-item"><span className="weather__key">Temperature:
                        <span className="weather__value">  {this.props.temperature}</span>
                    </span></li>
                }

                {
                    this.props.humidity && <li className="list-group-item"><span className="weather__key">Humidity:
                        <span className="weather__value">  {this.props.humidity}</span>
                    </span></li>
                }

                {
                    this.props.description && <li className="list-group-item"><span className="weather__key">Conditions:
                        <span className="weather__value">  {this.props.description}</span>
                    </span></li>
                }
                    </ul></div>
                {
                    this.props.error && <div className="alert alert-danger mt-3" role="alert">
                        <span className="weather__error">{this.props.error}</span></div>
                }

        
            </div>
        )
    }
}

export default Weather;