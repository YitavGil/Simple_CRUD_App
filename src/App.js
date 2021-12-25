import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import api from '../src/api/api';
import Shoes from "./comps/Shoes"
import Input from './comps/input';


class App extends Component {
constructor(props) {
  super(props);
  this.state = {shoe: [],
  name: "",
  avatar: "",
  id: "" 
 };
}

 

  render() {
  return (
    <div className="container">
      
      
      <div className='contact-container'>
      <Shoes />
      
      </div>
    </div>
  );
 }
}


export default App;
