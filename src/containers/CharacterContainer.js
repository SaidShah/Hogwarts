import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';


class CharacterContainer extends Component {

  render() {

      let eachPotterPic = this.props.characters.map(pot =>{
        return <CharacterCard potter={pot.potterObj}/>
      })
    return (
      <div>
        {eachPotterPic}
      </div>
    );
  }

}

export default CharacterContainer;
