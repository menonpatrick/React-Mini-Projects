import React from 'react';

class weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country} </p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature} </p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity} </p>}
                {this.props.description && <p>Description: {this.props.description} </p>}
                {this.props.wind_speed && <p>Wind Speed: {this.props.wind_speed} </p>}
                {this.props.error && <p> {this.props.error} </p> }
            </div>
        ); // return ends
    } // render function ends
} // class ends




export default weather;
