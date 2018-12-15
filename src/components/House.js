import React, { Component } from 'react';

const House = ({props, houses})=>{



    return (
      <div>
        <h1>Gryffindor House </h1><br></br>
        <div className="flex-container">
        {houses.map(a => {if(a.potterHouse === "Gryffindor"){return <img src={a.potterObj.image2} alt="" className="image2" />}})}
        </div>
        <br></br><br></br><br></br><br></br>

        <h1>Slytherin House</h1><br></br>
        <div className="flex-container">
        {houses.map(a => {if(a.potterHouse === "Slytherin"){return <img src={a.potterObj.image2} alt="" className="image2" />}})}
        </div>

        <br></br><br></br><br></br><br></br>
        <h1>HufflePuff House</h1><br></br>
        <div className="flex-container">
        {houses.map(a => {if(a.potterHouse === "HufflePuff"){return <img src={a.potterObj.image2} alt="" className="image2" />}})}
        </div>
        <br></br><br></br><br></br><br></br>

        <h1>Ravenclaw House</h1><br></br>
        <div className="flex-container">
        {houses.map(a => {if(a.potterHouse === "Ravenclaw"){return <img src={a.potterObj.image2} alt="" className="image2" />}})}
        </div>
      </div>
    );


}

export default House;
