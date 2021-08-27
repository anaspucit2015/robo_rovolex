import React from 'react';
import './App.css';
import CardList from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component';
import { Component } from 'react';
class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:"",
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=> this.setState({monsters:user}))
    .catch(error=> console.log(error))
  }
   handleChange=(e)=>{
    this.setState({searchField:e.target.value});
  }
 render(){
    const {monsters,searchField}=this.state;
    const filterMonster=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      <h1 className='heading'>Robo Rovoldex</h1>
      <SearchBox
        placeholder="Search Mosnters"
        handleChange={this.handleChange}
      />
      <CardList monsters={filterMonster}/>
    </div>
  );
 }
}

export default App;


/*
THIS IS IMPORTANT

onChange={e=>{
  this.setState({searchField:e.target.value},()=>
  console.log(this.state.searchField));
}}*/