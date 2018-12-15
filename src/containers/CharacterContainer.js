import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';


const CharacterContainer=({characters, imageClicked})=> {

      let eachPotterPic = characters.map(pot =>{
        return <CharacterCard potter={pot.potterObj} imageClicked={imageClicked}/>
      })
    return (
      <div>
        {eachPotterPic}
      </div>
    );
  }


export default CharacterContainer;
