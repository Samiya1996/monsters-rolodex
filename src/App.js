import React, {Component} from 'react';

import './App.css';
import { CardList} from './Component/card_list/card_list.component';

import { SearchBox } from './Component/Search_box/search_box.component';

class App extends Component{
  constructor(){
    super()

    this.state = {
      monsters : [],
      searchField : ''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(user => this.setState({monsters : user}))
  }

  handleChange = (e)=>{
    this.setState({searchField : e.target.value})
  }
  render(){

    const { monsters,searchField  } = this.state
    const filteredMonster = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()) )
    return(
      
      <div className="App">
        <h1>Monster Rolodex </h1>
        <SearchBox placeholder ='Search Monster'
         handleChange = {this.handleChange}> </SearchBox>
       
        <CardList monsters = {filteredMonster}>
         </CardList>
         
      
      </div>
    );
  }
}

export default App;
