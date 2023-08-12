import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <h1>Rest Countries</h1>
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  const [countries, setCountries] = useState([])

  useEffect( () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <div>
      <h3>Available countries: {countries.length}</h3>
      <div className='country-div'>
      {
        countries.map(country => <Country name={country.name.common} population ={country.population}  capital= {country.capital} flag = {country.flags.png} map = {country.maps.googleMaps} ></Country>)
      }
      </div>
    </div>
  )
}

function Country(props){
    return(
      <div className='country-box'>
        <h2>Name: {props.name}</h2>
        <h2>Capital: {props.capital}</h2>
        <h2>Population: {props.population}</h2>
        <img src={props.flag} alt={props.name}/>
      </div>
    )
}

export default App;
