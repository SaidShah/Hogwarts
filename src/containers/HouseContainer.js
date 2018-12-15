import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import React, { Component } from 'react';
import House from '../components/House'
import '../App.css'

class HouseContainer extends Component {





  render() {

      // let p = this.props.charHouses.map(a=>{
      //   console.log(a.index)
      // })
    return (
      <div>
        <House houses={this.props.charHouses} imageClicked={this.props.imageClicked}/>
      </div>
    );
  }

}

export default HouseContainer;
