import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import React, { Component } from 'react';
import House from '../components/House'
import '../App.css'

class HouseContainer extends Component {


handleclick=()=>{
  debugger
}


  render() {


    return (
      <div>
          <House houses={this.props.charHouses} />
      </div>
    );
  }

}

export default HouseContainer;
