import React from "react";

class Form extends React.Component{

    render(){

        return(
            <form onSubmit = {this.props.loadWeather}>
                <div className="form-row pt-2">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="city" name="city" placeholder="City"/>
                    </div>
                    {/* <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="country" name="country" placeholder="Country"/>
                    </div> */}
                </div>
                <button type="submit" className="btn btn-primary">Get Weather</button>
            </form>
        )
    }
}

export default Form;