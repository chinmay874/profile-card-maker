//import logo from './logo.svg';
import './App.css';
import {Card} from './component/card.js';
import logo1 from './boy.png';
import logo2 from './man.png';
import logo3 from './ganja.png'


function App() {
  return (
    <div className="App">
      <Card img={logo1} name="Chinmay jain" designation="FrontEnd developer" description="As a frontend developer, I specialize in crafting user-friendly interfaces for websites and web applications. Using my expertise in HTML, CSS, JavaScript, and other frontend technologies."/>
      <Card img={logo2} name="Rahul" designation="BackEnd developer" description="As a backend developer, I specialize in building the server-side logic and infrastructure that powers websites and web applications. Using my expertise in programming languages such as Java, Python, or Ruby"/>
      <Card img={logo3} name="Sandeep" designation="FullStack developer" description="As a fullstack developer, I am proficient in both frontend and backend technologies, allowing me to build end-to-end web applications. "/>
    </div>
  );
}

export default App;
