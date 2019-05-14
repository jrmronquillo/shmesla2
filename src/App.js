import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/App.css';
import Title from './Components/Title';
import Navbar from './Components/Navbar';
import Infobar from './Components/Infobar';
import Downarrow from './Components/Downarrow';
import Sidemenu from './Components/Sidemenu';
import Backdrop from './Components/Backdrop';
import Sidenav from './Components/Sidenav';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shouldScroll : false,
      sideMenuDisplay: false,
      lastPageYOffset: 0,
      currentSectionDisplayed: '#appHeader',
      downArrowDisplay: true,
      eventStarter: true,
      wheelDirection: '',
      previousWheelDirection: '',
      wheelEnd: false,
    };

  this.triggerNumScroll = this.triggerNumScroll.bind(this);
  this.sideMenuToggle = this.sideMenuToggle.bind(this);
  this.sideMenuClose = this.sideMenuClose.bind(this);
  this.scrollIntoViewTest = this.scrollIntoViewTest.bind(this);
  this.handleScroll = this.handleScroll.bind(this);
  this.handleWheel = this.handleWheel.bind(this);
  //this.wheelEnd = this.wheelEnd.bind(this);
  this.checkDirectionChange = this.checkDirectionChange.bind(this);

  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel);
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('wheel', this.handleWheel);
  }

 
  handleWheel(e){
    //e.preventDefault();
    //e.stopPropagation();
    //e.returnValue = false;
    //console.log('handleWheel triggered!');
    //console.log('previousWheelDirection:'+this.state.previousWheelDirection)
    //console.log(e.wheelDelta);
    
    // set wheelDirection according to wheelDelta
    if(e.wheelDelta>0){
      this.setState({
        wheelDirection: 'up',
      })
    } else {
      this.setState({
        wheelDirection: 'down',
      })
    }
    // only call scroll action when there is a change in scroll direction
    this.checkDirectionChange()
    return false;

  }

  checkDirectionChange(){
    // to prevent the window.scroll action from triggering multiple times,
    // it is only called when there is a change in scroll direction
    console.log('current wheel direction: '+this.state.wheelDirection);
    if(this.state.wheelDirection === this.state.previousWheelDirection){
      //console.log('Do nothing');
    } else {
      //console.log('scroll action should trigger here');
      if(this.state.wheelDirection === 'up'){
        window.scrollTo(0, document.getElementById('appHeader').offsetTop)
      } else {
        window.scrollTo(0, document.getElementById('section1').offsetTop)
      }
    }
    
    this.setState({
      previousWheelDirection: this.state.wheelDirection,
    })
  }


  handleScroll(e){

    console.log(this.state.currentSectionDisplayed);
    console.log('handleScroll triggered!');
    console.log(window.pageYOffset);
    if (window.pageYOffset === document.getElementById('appHeader').offsetTop){
      this.setState({
        currentSectionDisplayed: '#appHeader',
      })
    } else{
      this.setState({
        currentSectionDisplayed: 'section1',
      })
    }
  }

  scrollThere(target){
    console.log('scroll there triggered');
    window.scrollTo(0,0)
  }

  scrollIntoViewTest(target){
    console.log('scrollIntoViewTest Triggered!')
    //console.log(target);
    //var el = document.getElementById(target);
    //target.scrollIntoView();
    target.scrollTop();
    //target.scrollIntoView(false);
    //target.scrollIntoView({block: "end"});
    //target.scrollIntoView({behavior: "auto", block: "end", inline: "nearest"});
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
        <div className="App-header" id="appHeader" >
          <Navbar sideMenuToggle={this.sideMenuToggle} sideMenuDisplay={this.state.sideMenuDisplay} />
          <Sidemenu sideMenuDisplay={this.state.sideMenuDisplay} sideMenuClose={this.sideMenuClose}  />
          <Title />
          <span className="text-main-subtitle">Model A</span>
          <Infobar handleClick={this.triggerNumScroll} />
          <Downarrow />
          <Backdrop sideMenuToggle={this.sideMenuToggle} sideMenuDisplay={this.state.sideMenuDisplay} />
        </div>
        <div id="section1">
          <div className="section-header-text">
            <span className="font-white"></span>
          </div>
        </div>
        <Sidenav scrollIntoViewTest={this.scrollIntoViewTest} currentSectionDisplayed={this.state.currentSectionDisplayed} />
      </div>
    );
  }
}

export default App;
