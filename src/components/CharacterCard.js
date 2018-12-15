import React, { Component } from 'react';
import '../App.css';

class CharacterCard extends Component {
  render() {
    return (
      <div>
      <br></br> <h4 className="text_on_page">Name: {this.props.eachPotter.name} <span> | House: {this.props.eachPotter.house}</span></h4>
        <img src={this.props.eachPotter.image1} alt="" className="potter_image_sizes"/>
      </div>
    );
  }

}

export default CharacterCard;
