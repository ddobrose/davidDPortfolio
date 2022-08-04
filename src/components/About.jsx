import React from 'react'
import Container from 'react-bootstrap/esm/Container'

export const About = ({projects, aboutMe}) => {
  return (
    <Container className='row row-cols-3 row-cols-md-2'>
        <div id='scrollspyAboutMe' >
            <h4>About Me</h4>
            <p>{aboutMe.description}</p>
            <h5>Tech</h5>
            <ul className='row row-cols-3 row-cols-md-3'>
          {" "}
          {aboutMe.tech.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
        </div>
        <div >
          <img src="/images/headshotadjusted.png" alt="" />
        </div>
    </Container>
  )
}
