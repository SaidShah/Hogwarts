import React, {Component} from 'react';

class Form extends Component{

  state={
    name: ' ',
    age: ' ',
    house: ' ',
    role: ' ',
    image1: ' ',
    image2: ' '
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit=(e,potter)=>{
    e.preventDefault()
    this.props.handleSubmit(e,potter)
    this.setState({
      name: ' ',
      age: ' ',
      house: ' ',
      role: ' ',
      image1: ' ',
      image2: ' '
    })
  }


render(){
  return(
      <div>
      <br></br>
      <h2>Add a character</h2>
      <br></br>
        <form onSubmit={(e)=>this.handleSubmit(e,this.state)}>
          <label>Name </label>
          <input type="text" onChange={this.handleChange} value={this.state.name} name="name"></input><br></br>
            <label>age </label>
          <input type="text" onChange={this.handleChange} value={this.state.age} name="age"></input><br></br>
            <label>house </label>
          <input type="text" onChange={this.handleChange} value={this.state.house} name="house"></input><br></br>
            <label>role </label>
          <input type="text" onChange={this.handleChange} value={this.state.role} name="role"></input><br></br>
            <label>image1 </label>
          <input type="text" onChange={this.handleChange} value={this.state.image1} name="image1"></input><br></br>
            <label>image2 </label>
          <input type="text" onChange={this.handleChange} value={this.state.image2} name="image2"></input><br></br>
          <input type="submit"></input><br></br>
        </form>
      </div>
  )
 }
}

export default Form
