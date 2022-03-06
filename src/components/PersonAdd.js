import axios from 'axios'
import React, { Component } from 'react'
import API from '../api'
export default class PersonAdd extends Component {
    state={name:""}
    handleSubmit=(evt)=>{
        evt.preventDefault()
        const user={name:this.state.name}
       API.post("users",{user}) //No Refresh Page
       .then(res=>console.log("Axios Post", res))
    }
    handleChange=(event)=>{
        this.setState({name:event.target.value})
    }
  render() {
    return (
      <div>
          <hr/>PersonAdd
          <form onSubmit={this.handleSubmit}>
              <label>
                  Person Name:
                  <input type="text" name='name'  id='name'
                  onChange={this.handleChange}
                  value={this.state.name}></input>
              </label>
              <button type='submit'>Add</button>
          </form>
          </div>
    )
  }
}
