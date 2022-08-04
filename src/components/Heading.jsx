
import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import TypeWriter from 'typewriter-effect';

export const Heading = ({aboutMe, projects}) => {
  return (
    <>
    
    <Container>
        <h5>Hi, my name is</h5>
        <h1>David Dobrose</h1>
        <h2>I am a Full Stack Web Developer</h2>
        <p>I am a full-stack web developer with the ability to solve problems. I am a <TypeWriter
        options = {{
            strings: ["hard worker.", "team player.", 'competitor.', 'fast learner.'],
            autoStart:true,
            loop:true
        }}  /> </p>
     
   
     <div className="btn-container">
        <a
          href="https://www.linkedin.com/in/david-dobrose/"
          target="_blank"
          className="icon linkedin"
          rel="noreferrer"
        >
          <button type="button" className="btn btn-secondary btn-lg m-3">
            <span className='me-3 text-white'>
            <i class="fab fa-linkedin "></i>
            </span>
            <span className="btn-text">LinkedIn</span>
          </button>
        </a>
        <a
          href="https://github.com/ddobrose"
          target="_blank"
          className="icon github"
          rel="noreferrer"
        >
          <button type="button" className="btn btn-secondary btn-lg m-3">
            <span className='me-3'>
              <i className="fab fa-github"></i>
            </span>
            <span className="btn-text">Github</span>
          </button>
        </a>
      </div>
        
    </Container>
    </>
  )
}
