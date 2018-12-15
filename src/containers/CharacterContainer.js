import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';


class CharacterContainer extends Component {

  render() {
    let allChars = this.props.characters.map(eachChar =>{
      return <CharacterCard eachPotter={eachChar}/>
    })
    return (
      <div>
        {allChars}
      </div>
    );
  }

}

export default CharacterContainer;
