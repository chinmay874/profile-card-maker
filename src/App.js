//import logo from './logo.svg';
import './App.css';
import {Card} from './component/card.js';


const perosnInfo=[
{
img:"boy.png",
name:"Chinmay jain", 
designation:"FrontEnd developer",
description:"As a frontend developer, I specialize in crafting user-friendly interfaces for websites and web applications. Using my expertise in HTML, CSS, JavaScript, and other frontend technologies."
},
{
img:"ganja.png",
name:"Rahul",
designation:"BackEnd developer",
description:"As a backend developer, I specialize in building the server-side logic and infrastructure that powers websites and web applications. Using my expertise in programming languages such as Java, Python, or Ruby"
},
{
img:"man.png",
name:"Sandeep",
designation:"FullStack developer",
description:"As a fullstack developer, I am proficient in both frontend and backend technologies, allowing me to build end-to-end web applications. "
},
]
function App() {
  return (
    <div className="App">
      {/* <Card  person={perosnInfo[0]}/> */}
      {/* <Card  person={perosnInfo[1]}/>
      <Card  person={perosnInfo[2]}/> */}
      {[perosnInfo[0],perosnInfo[1],perosnInfo[2]].map((obj,i) => <Card key={i*10} person={obj}/>)}
    </div>
  );
}

export default App;
