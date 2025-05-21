import React from 'react'
import { ReactTyped,Typed } from "react-typed";
import hero from '../assets/hero.png';

function Center() {
  return (
 
  <>
 <div className="hero">
          
         <div>
          <div className="text">
          <h1>Hello!</h1>
          
               <div className='loop'>  
             <span>I'm a front-end</span>
          <ReactTyped className='loop2'
          strings={["Developer", "progammer","coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
          />
    
          </div>
          <br />
        <p>passionate about creating modern, responsive, and user-centric web applications. With a solid foundation in HTML, CSS, JavaScript, and React.js.</p></div>
          
          </div>
        <div className='img'>
          <img src={hero} alt=""></img></div>
          </div>
    </>
  )
}
  export default Center;

