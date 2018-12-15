import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import React, { Component } from 'react';
import CharacterContainer from './containers/CharacterContainer'
import HouseContainer from './containers/HouseContainer';
import Form from './components/Form'
import './App.css';

class App extends Component {

  state={
    characters: [],
    charactersCopy: [],
    index: 0
  }

  handleSubmit=(e,potter)=>{
    e.preventDefault()
    let arr= [...this.state.characters, {potterObj: potter, potterHouse: potter.house, index:this.state.characters.length}]
    this.setState({
      characters: arr
    })
    console.log(e)
  }


componentDidMount() {
  fetch("http://localhost:3001/potter_stuff")
  .then(res => res.json())
  .then(charas =>{
      let eachCharArray = charas.map(eachPot =>{
        return {potterObj: eachPot, potterHouse: eachPot.house, index: this.state.index++}
      })
      this.setState({characters: eachCharArray})
  })
}

imageClicked=(e, potter)=>{
  let arr = [...this.state.characters]
  let p = this.state.characters.filter(a => a.potterObj === potter)
  let house = potter.house
  if(house === "Slytherin"){
    house = "HufflePuff"
  }else if(house === "HufflePuff"){
    house = "Ravenclaw"
  }else if (house === "Ravenclaw"){
    house = "Gryffindor"
  }else if(house === "Gryffindor"){
    house = "Slytherin"
  }

  let newArr = arr.map(a=>{
   if(a.potterObj === potter){
       a.potterObj.house = house
       a.potterHouse = house
    }
    return a
  })
  this.setState({
    characters: newArr
  })

}

  render() {
    return (
  <div>
    <Grid>
      <Row className="show-grid">
        <Col lg={5}>
          <CharacterContainer characters={this.state.characters} imageClicked={this.imageClicked}/>

        </Col>
        <Col  lg={6}>
          <Form handleSubmit={this.handleSubmit}/>
        </Col>
      </Row>
        <br></br><br></br><br></br>

      <Row className="show-grid">
        <Col md={6} xs={3}>
            <HouseContainer charHouses={this.state.characters} imageClicked={this.imageClicked}/>
        </Col>

      </Row><br></br>
    </Grid>;
  </div>
    );
  }
}

export default App;
