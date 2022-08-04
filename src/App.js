
import { Container } from 'react-bootstrap';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import  { TopNav}  from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';

function App() {
  const projects = [
    {
      pic:'https://i.imgur.com/yU7KYCF.png',
      name:"Let's Get Trivial",
      github:"https://github.com/ddobrose/lets-get-trivial",
      deployed:"https://ddobrose.github.io/lets-get-trivial/",
      software:['HTML', 'CSS', 'JavaScript'],
      about:'A trivia game with sound effects based off of "Who wants to be a millionaire"'
  },
  {
    pic:'https://i.imgur.com/foZxMM6.png',
    name:'Every-Set',
    github:"https://github.com/ddobrose/Every-Set",
    deployed:"https://every-set.herokuapp.com/",
    software:['Node', 'Express', 'MongoDB', 'Mongoose', 'Handlebars', 'JavaScript', 'BootStrap'],
    about:'A full CRUD workout app to schedule and track workouts.'
},{
  pic:'https://i.imgur.com/vOMDhiP.png',
  name:'TrailBlazers',
  github:"https://github.com/ddobrose/trailblazer-frontend",
  deployed:"https://funny-cat-673521.netlify.app/",
  software:['React','CSS', 'BootStrap', 'Express', 'Node.js', 'Mongoose', 'MongoDB'],
  about:'A full-stack MERN app built to display information on National Parks.'
},
{
  pic:'https://i.imgur.com/SUPRE9M.png',
  name:'DaveyDCakes',
  github:"https://github.com/ddobrose/davey_d_cakes",
  deployed:"https://daveydcakes.netlify.app/",
  software:['React', 'Django', 'Python', 'ReactBootStrap', 'EmailJS'],
  about:'An online ordering website for a imaginary bakery called DaveyDCakes'
}
  ]

  const aboutMe = {
    firstName:'David',
    lastName:'Dobrose',
    tech:['HTML', 'React', 'MongoDB', 'BootStrap', 'GitHub', 'CSS', 'Node', 'MySQL', 'Python', 'Heroku', 'JavaScript', "Express", 'PostgreSQL', 'Django'],
    linkedIn:'https://www.linkedin.com/in/david-dobrose/',
    github:'https://github.com/ddobrose',
    email:'ddobrose@yahoo.com',
    description:'I am a full-stack web developer driven by my love for my family and desire to grow my family. The current landscape of social media along with the important role it plays in our society has made me passionate about working in the industry, providing functionality focused on ease of use for content creators and helping them better focus on the creative side of their businesses, which drives more content and more eyes on the platform. What I add to a team is the sometimes brutally honest feedback I give. I am able to comb through and see problems in projects people did not realize were there and make things more efficient. I do all of this with the values of rationality and authenticity in mind.',
    logo:"/images/davidlogo.png",
    picture:'/images/Headshotdavid.jpg'
  }
  return (
    <>
    <TopNav/>
    <Container className='mt-4'>
    <Heading aboutMe={aboutMe} projects={projects}/>
    </Container>
    <Container className='justify-center mt-4'>
      <About aboutMe={aboutMe} projects={projects}/>
      </Container>

      <Container className='justify-content-center'>
        <ProjectCard projects={projects} />
      </Container>

      <Contact/>

    

    <Footer/>
    </>
  );
}

export default App;
