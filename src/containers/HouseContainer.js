import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import React, { Component } from 'react';
import House from '../components/House'

class HouseContainer extends Component {

  state={
    gryffindor: [],
    slytherin: []
  }


  componentWillReceiveProps() {
    let gryffindorArray = this.props.characters.map(eachChar =>{
        return eachChar.house=== "Gryffindor"
    })
    let slytherinArray = this.props.characters.map(eachChar =>{
      return eachChar.house=== "Slytherin"
    })

    this.setState({
      gryffindor: gryffindorArray,
      slytherin: slytherinArray
    })
  }

  render() {

    return (
      <div>
      <House slytherin={this.state.slytherin}/>
      <House gryffindor={this.state.gryffindor}/>
      </div>
    );
  }

}

export default HouseContainer;
