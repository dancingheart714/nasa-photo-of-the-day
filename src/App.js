import React, { useState, useEffect } from "react";
import "./App.css";

//Import axios
import axios from 'axios';




//useState
function App() {
  const [picture, setPicture] = useState({});
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [copyright, setCopyright] = useState();
  const [explanation, setExplanation] = useState();
 

//useEffect  
  useEffect (( ) => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=XqsRdChnd0Bq8ZZYyQwDpUYhjIkKfqVXW21PM8vH`)
  

    .then(response => {
      const dailyPicture = response.data.url
      setPicture(dailyPicture)
      const dailyTitle = response.data.title
      setTitle(dailyTitle)
      const dailyDate = response.data.date
      setDate(dailyDate)
      const dailyCopyright = response.data.copyright
      setCopyright(dailyCopyright)
      const dailyExplanation = response.data.explanation
      setExplanation(dailyExplanation)
     
      console.log(response.data)
    })
    .catch( error => {
      console.log(error);
    })
  }, [])

  //Set up page layout
  return (
    <div className="App">
      <h1>Welcome to my NASA Photo of the Day Website <span role="img" aria-label='go!'>🚀</span></h1>
      <h3>The picture for {date}</h3>
      <img src={picture} alt=''/>
      <h3>{title}</h3>
      <p>{explanation}</p>
      
      <h3>Copyright: {copyright}</h3>
    </div>
  );
}

export default App;
