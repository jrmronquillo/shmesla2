import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Title from './Components/Title';
import Navbar from './Components/Navbar';
import Infobar from './Components/Infobar';
import Downarrow from './Components/Downarrow';
import Sidemenu from './Components/Sidemenu';
import Backdrop from './Components/Backdrop';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shouldScroll : false,
      sideMenuDisplay: false,
    };

  this.triggerNumScroll = this.triggerNumScroll.bind(this);
  this.sideMenuToggle = this.sideMenuToggle.bind(this);
  this.sideMenuClose = this.sideMenuClose.bind(this);

  }

  triggerNumScroll(){
    console.log('triggerNumScroll executed');
    this.setState({
      shouldScroll: true,
    })
  }

  sideMenuClose(){
    console.log('sideMenuClose triggered!');
    this.setState({
      sideMenuDisplay: false,
    })
  }

  sideMenuToggle(){
    console.log('sideMenuToggle triggered!');
    this.setState({
      sideMenuDisplay: !this.state.sideMenuDisplay,
    })
  }


  render() {
    return (
      <div className="App">

        <header className="App-header">
          
          <Navbar sideMenuToggle={this.sideMenuToggle} sideMenuDisplay={this.state.sideMenuDisplay} />
          <Sidemenu sideMenuDisplay={this.state.sideMenuDisplay} sideMenuClose={this.sideMenuClose}  />
          <Title />
          <span className="text-main-subtitle">Model A</span>
          <Infobar handleClick={this.triggerNumScroll} />
          <Downarrow />
          <Backdrop sideMenuToggle={this.sideMenuToggle} sideMenuDisplay={this.state.sideMenuDisplay} />

        </header>

      </div>
    );
  }
}

export default App;
