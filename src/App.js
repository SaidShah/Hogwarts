import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import React, { Component } from 'react';
import CharacterContainer from './containers/CharacterContainer'
import HouseContainer from './containers/HouseContainer';
import './App.css';

class App extends Component {

  state={
    characters: [],
    charactersCopy: []
  }


componentDidMount() {
  fetch("http://localhost:3001/potter_stuff")
  .then(res => res.json())
  .then(charas =>{
    this.setState({characters: charas, charactersCopy: charas})
  })
}

  render() {
    return (
  <div>
    <Grid>
      <Row className="show-grid">
        <Col lg={5}>
          <CharacterContainer characters={this.state.characters}/>

        </Col>
        <Col  lg={6}>
          SECOND COLUMN
        </Col>
      </Row>
        <br></br><br></br><br></br>

      <Row className="show-grid">
        <Col md={6} xs={3}>
            <HouseContainer characters={this.state.characters}/>
        </Col>

      </Row><br></br>
    </Grid>;
  </div>
    );
  }
}

export default App;
