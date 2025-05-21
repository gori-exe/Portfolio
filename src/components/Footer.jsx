import React from 'react'
import instgrm from '../assets/instgrm.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
function Footer() {
  return (
    <>
    <div className="borderlinee">

    </div>
    <div className="inst">
        <a href="https://www.instagram.com/nouman_khan42/" target="_blank" rel="noopener noreferrer">
            <img src={instgrm} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/eman-saleem-dev" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
        </a>
            <a className='git' href="https://mkgdevelopers.github.io/" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Github" />
            </a>
    </div>
    </>
  )
}

export default Footer