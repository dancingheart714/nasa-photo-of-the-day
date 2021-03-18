

import React from 'react'
import styled from 'styled-components'
import "./index.js";

const StyledNasa = styled.div`
    background-color: lightblue;
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
}`









export default function Nasa({ info, action}) {
    return (
        <StyledNasa className='nasaCard'>
         {info.name}
        <img src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.abc6.com/content/uploads/2020/10/logo-thumbnail-full_0.jpg" alt= 'nasa logo'/>

      <h1>Welcome to my NASA Photo of the Day Website<span role="img" aria-label='go!'></span></h1>

    <StyledButton a href="http://nasa.gov">Watch NASA Live!</StyledButton>

 
        <button onClick={() => action(info.id)}>
            Visit The Nasa Web Site
        </button>
        </StyledNasa>
    )
}


//     <span></span>

//       <h3>The picture for {date}</h3>

//       <img src={picture} alt=''/>

//       <h3>{title}</h3>

//       <p>{explanation}</p>
      
//       <h3>Copyright: {copyright}</h3>

//     </div>
//   );
// }




