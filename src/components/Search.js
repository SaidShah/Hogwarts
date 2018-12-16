import React, {Component} from 'react';

class Search extends Component{

  state={
    byName: '',
    house: ''
  }

  handleSearch=(e,term)=>{
    e.preventDefault()
    this.props.handleSearch(e,term)
    this.setState({
      byName: ' ',
      house: ' '
    })
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  render (){
    return(
      <div>
        <h2>Search by name</h2><br></br>
        <form onSubmit={(e)=>this.handleSearch(e, this.state)}>
          <input type="text" name="byName" onChange={this.handleChange} value={this.state.byName}></input>
          <input type="submit"></input>
        <h2>Search by house</h2><br></br>
        <input type="text" name="house" onChange={this.handleChange} value={this.state.house}></input>
         <input type="submit"></input>
         </form>
      </div>
  )
 }
}
export default Search;
