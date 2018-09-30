import React, { Component } from 'react';
import './App.css';
import Grid from './components/grid';
import Buttons from './components/buttons';





class Main extends React.Component {

  constructor(props) {
    super(props);
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    } // state ends
  } // constructor ends


  // select box allows user to change the boolean value of any tile manually
  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      // generation: 0,
      gridFull: gridCopy
    }) // this.state ends
  } // selectBox() ends

  // seed function generates random numbers, and if its equal to 1,
  // that particular tile gets a value of true [ON]
  seed = () => {
    let gridCopy = arrayClone(this.state.gridFull);

    for(let i=0; i<this.rows; i++) {
      for(let j=0; j<this.cols; j++) {
        if(Math.floor(Math.random()*4) === 1) {
          gridCopy[i][j] = true;
        } // if ends
      } // for j ends
    } // for i ends

    this.setState({
      gridFull: gridCopy
    })
  } // seed() ends


  pauseButton = () => {
    clearInterval(this.intervalId);
  }


  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  } // playButton() ends

  slow = () => {
    this.speed = 1000;
    this.playButton();
  } // slow() ends

  fast = () => {
    this.speed = 100;
    this.playButton();
  } // fast() ends

  clear = () => {
    var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
    this.setState({
      gridFull: grid,
      generation: 0
    })
  } // clear() ends

  gridSize = (size) => {
    switch(size) {
      case "1":
        this.rows = 10;
        this.cols = 20;
        break;
      
      case "2":
        this.rows = 30;
        this.cols = 50;
        break;
      
      default:
        this.rows = 50;
        this.cols = 70;
        break;

    }
    this.clear();

  } // gridSize() ends

  play = () => {
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for(let i=0; i<this.rows; i++) {
      for(let j=0; j<this.cols; j++) {
        let count = 0;

        // Conditions for checking the neighboring tiles

        // #1 checking the upper tile
        if(i>0) if(g[i-1][j]) count++;

        // #2 checking the left upper diagonal tile
        if(i>0 && j>0) if(g[i-1][j-1]) count++;

        // #3 checking the right upper diagonal tile
        if(i>0 && j<this.cols-1) if(g[i-1][j+1]) count++;

        // #4 checking the right tile
        if(j<this.cols-1) if(g[i][j+1]) count++;

        // #5 checking the left tile
        if(j>0) if(g[i][j-1]) count++;

        // #6 checking the bottom tile
        if(i<this.rows-1) if(g[i+1][j]) count++;

        // #7 checking the bottom left diagonal
        if(i<this.rows-1 && j>0) if(g[i+1][j-1]) count++;

        // #8 checking the bottom right diagonal tile
        if(i<this.rows-1 && j<this.cols-1) if(g[i+1][j+1]) count++;


        // By the game rules, if the tile is alive and
        // if count is less than of greater than 3
        if(g[i][j] && (count < 2 || count > 3))
          g2[i][j] = false;


        // By game rules, if the tile is dead and
        // if count is equal to 3
        if(!g[i][j] && count === 3)
          g2[i][j] = true;

      } // j loop ends
    } // i loop ends

    this.setState({
      generation: this.state.generation+1,
      gridFull: g2
    })
  } // play() ends


  // componentDidMount() {
  //   this.seed();
  //   this.playButton();
  // }


  render() {
    return (
      <div className="container">
        <h1>The Game of Life</h1>
        <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          slow={this.slow}
          fast={this.fast}
          clear={this.clear}
          seed={this.seed}
          gridSize={this.gridSize}
        />

        <Grid
        gridFull={this.state.gridFull}
        rows={this.rows}
        cols={this.cols}
        selectBox={this.selectBox}
        />

        <h2>Generations: {this.state.generation}</h2>

      </div>
    ); // return ends
  } // render() ends
} // class Main ends


function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default Main;
