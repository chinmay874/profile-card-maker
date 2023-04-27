import { Fragment } from 'react'
import './card.css'
export function Card(props){
    function btn(){
        alert(props.person.img)
    }
    return(
        <Fragment>
            <div id="card1">
                <img id="img1" src={props.person.img} alt='' style={{border:'3px solid #ffffff', borderRadius:'50%'}}/>
                <p style={{color:'#ffffff', fontSize:'15px',fontFamily:'sans-serif'}}>{props.person.designation}</p>
                <p style={{color:'#ffffff',fontSize:"20px", fontWeight:'bold'}}>{props.person.name}</p>
                <p style={{color:'#ffffff',fontSize:'13px'}}>{props.person.description}</p>
                <button onClick={btn} style={{height:'30px',width:'100px',borderRadius:'15px'}}>See More</button>

            </div>
        </Fragment>
    )
    
}
