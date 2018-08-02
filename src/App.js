import React, { Component } from 'react';
import HotelShare from './page/HotelShare/HotelShare';
import FlightShare from './page/FlightShare/FlightShare';
import TravelShare from './page/TravelShare/TravelShare';
import Order from './page/Order/Order';
import FriendGroup from './page/FriendGroup/FriendGroup';
import BigImage from './page/BigImage/BigImage';
import html2canvas from 'html2canvas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData:[],
      imgSrc: ''
    }
  }
  generateImg = (id) => {
    let domId = "#" + id;
    let global = this;
    html2canvas(document.querySelector(domId)).then(function(canvas) {
        global.setState({
          imgData:[{
            url: canvas.toDataURL("image/png"),
            id: '1'
          }],
          imgSrc: canvas.toDataURL("image/png")
        })
    });
  }
  render() {
    return (
      <div>
        <div id="Order" className="page in" style={{overflow:"auto"}}>
          <Order ref="Order"/>
        </div>
        <div id="HotelShare" className="page out" style={{overflow:"auto"}}>
          <HotelShare ref="HotelShare" generateImg = {this.generateImg}/>
        </div>
        <div id="FlightShare" className="page out" style={{overflow:"auto"}}>
          <FlightShare ref="FlightShare" generateImg = {this.generateImg}/>
        </div>
        <div id="TravelShare" className="page out" style={{overflow:"auto"}}>
          <TravelShare ref="TravelShare" generateImg = {this.generateImg}/>
        </div>
        <div id="FriendGroup" className="page out" style={{overflow:"auto",backgroundColor:"white"}}>
          <FriendGroup ref="FriendGroup" imgData = {this.state.imgData }/>
        </div>
        <div id="BigImage" className="page out" style={{overflow:"auto",backgroundColor:"white"}}>
          <BigImage imgSrc={this.state.imgSrc }/>
        </div>
      </div>
    );
  }
}

export default App;
