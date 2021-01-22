import React, { Component, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
//import src from '*.bmp';
import {BASE_URL} from './components/constant/index'



 const App = () => {

  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState('1')

  const openDetails = id =>{
    setCurrentCharacter(id)
  }
  const closeDetails = () =>{
    setCurrentCharacter(null)
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

// useEffect(() =>{
//   axios.get(`${BASE_URL}people`)
//   .then((res) =>{
//     setCharacters(res.data)
//   })
//   .catch((err) =>console.log(err))
  
//  },[]) 

export default App;
