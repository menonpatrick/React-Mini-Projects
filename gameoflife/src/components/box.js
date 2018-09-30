import React from 'react';

class Box extends React.Component {

    selectBox = () => {
        this.props.selectBox(this.props.row, this.props.col);
    }

    render() {
        return (
            <div
            className={this.props.boxClass}
            id={this.props.id}
            onClick={this.selectBox}>
            
            </div>
        );
    } // render() ends
} // class ends


export default Box;