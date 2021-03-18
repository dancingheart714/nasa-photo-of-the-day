import React, { useState, useEffect } from "react"
import "./App.css"
import styled from 'styled-components'
//Import axios and api 
import axios from 'axios'
import { BASE_URL, API_KEY } from './apiInfo'
// import Button from './Button'
import theme from './theme'


//useState
function App() {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [copyright, setCopyright] = useState();
  const [explanation, setExplanation] = useState();
  
 


//useEffect  
  useEffect (( ) => {
    axios
    .get(`https:${BASE_URL}?${API_KEY}`)
  

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
    })

    .catch( error => {
      console.log('Our apologies, the data was not returned');
    })
  }, [])


  const StyledNasa = styled.div`
  font-weight: bold;
  width: 60%;
  display: flex;
  justify-content: center;
}
`

const StyledButton = styled.button`
background-color: royalblue; 
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: bold;
display: inline-block;
font-size: 18px;

&:hover{
  color: red;
  transform: scale(2);
  transition: all 2s ease-in-out
}
`

const StyledPara = styled.p`
background: lightblue;
`


  //Set up page layout
  return (
    <div className="App">
      <img src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.abc6.com/content/uploads/2020/10/logo-thumbnail-full_0.jpg" alt= 'nasa logo'/>

      <h1>Welcome to my NASA Photo of the Day Website<span role="img" aria-label='go!'></span></h1>

    <StyledButton a href="http://nasa.gov">Watch NASA Live!</StyledButton>

    <span></span>

      <h3>The picture for {date}</h3>

      <img src={picture} alt=''/>

      <h3>{title}</h3>

      <StyledPara>{explanation}</StyledPara>
      
      <h3>Copyright: {copyright}</h3>

    </div>
  );
}

export default App;
