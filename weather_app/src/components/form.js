import React from 'react';

class form extends React.Component {
    render() {
        return (
        <form onSubmit={this.props.getWeather} >
            <input type="text" name="city" placeholder="city" autofocus="autofocus" />
            <input type="text" name="country" placeholder="country" />
            <button>Get Weather</button>
        </form>
        ); // return ends
    } // render function ends
} // class ends




export default form;
