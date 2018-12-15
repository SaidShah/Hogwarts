import React, { Component } from 'react';
import '../App.css';

const CharacterCard=({potter, imageClicked})=> {


    return (
      <div>
      <br></br> <h4 className="text_on_page">Name: {potter.name} <span> | House: {potter.house}</span></h4>
        <img src={potter.image1} alt="" className="potter_image_sizes" onClick={(e)=>imageClicked(e,potter)}/>
      </div>
    );
  }



export default CharacterCard;
