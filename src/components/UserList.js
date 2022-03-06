import React, { Component } from 'react'

export default class UserList extends Component {
    state={users:[],isLoading:true,todoCount: 0}
    // constructor(props) {
    //   super()
    //   fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(data => {setTimeout(() =>{
    //     this.setState({users:data,isLoading:false})
    // }, 2000);})
    //}
componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {setTimeout(() =>{
        this.setState({users:data,isLoading:false})
    }, 2000);})
    
 }

 getTodoList=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(r=>r.json())
    .then(result=>this.setState({todoCount:result.length}))

}


  render() {
    console.log("State Values:",this.state)
    const{users,isLoading,todoCount}=this.state
    
   
   
    return (
        
      <div>
          <h3>Users List</h3>
          {isLoading}
          {isLoading === true ? "Loading...." : users.map(item=><div key={item.id}>
              {item.id}.{item.name} {item.surname}</div>

          )}
          <hr/>
          Todo List : {todoCount} <br/>
          <button onClick={this.getTodoList}>Get Todo List</button>
      </div>
    )
  }
}
