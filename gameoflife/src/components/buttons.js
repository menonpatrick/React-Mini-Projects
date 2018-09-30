import React from 'react';
import {ButtonToolbar, MenuItem, DropdownButton} from 'react-bootstrap';


class Buttons extends React.Component {

    handleSelect = (e) => {
        this.props.gridSize(e);
    } // handleSelect() ends


    render() {
        return (
            <div className="center">
                <ButtonToolbar>
                    <button className="btn Btn-default" onClick={this.props.playButton}> Play </button>
                    <button className="btn Btn-default" onClick={this.props.pauseButton}> Pause </button>
                    <button className="btn Btn-default" onClick={this.props.clear}> Clear </button>
                    <button className="btn Btn-default" onClick={this.props.slow}> Slow </button>
                    <button className="btn Btn-default" onClick={this.props.fast}> Fast </button>
                    <button className="btn Btn-default" onClick={this.props.seed}> Seed </button>

                    <DropdownButton
                        title="Grid Size"
                        id="size-menu"
                        onSelect={this.handleSelect.bind(this)}>

                        <MenuItem eventKey="1"> 20x10 </MenuItem>
                        <MenuItem eventKey="2"> 50x30 </MenuItem>
                        <MenuItem eventKey="3"> 70x50 </MenuItem>
                    </DropdownButton>
                </ButtonToolbar>
            </div>

        ); // return ends
    } // render() ends
} // class Buttons ends

export default Buttons;