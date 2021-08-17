import React from 'react';
import './App.css';
import { Component } from 'react';
class App extends Component {
  constructor(){
    super();
    this.state={
      name:'Hey There',
      monsters:[
          
      ]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=> this.setState({monsters:user}))
    .catch(error=> console.log(error))
  }
 render(){
  return (
    <div className="App">
      {this.state.monsters.map(mon=><h1 key={mon.id}>{mon.name}</h1>)}
    </div>
  );
 }
}

export default App;