import './about.css';
import { useState } from 'react';

function About() {

  const [ a , setA ] = useState(10);
  const [ b , setB ] = useState(20);
  
  const [ cDate , setCurrentDate ] = useState(Date());

  const [ counter , setCounter ] = useState(0);

  const [ mks , setMarks ] = useState([45,67,32,78,98]);

  const [ empDetails , setEmployeeDetails ] = useState({"eno":1001,"enm":"Jarvis","esal":10000.56});

  setTimeout(()=>{
    setCurrentDate(Date());    
  },1000);

  const incrementCount=()=>{
     setCounter(counter+1); 
  };

  const decrementCount=()=>{
    setCounter(counter-1); 
  };

  return (
   <div id="content_part2" >
   <h1>Employee details loop access</h1>
   {
     Object.keys(empDetails).map((k)=>(
      <p>{k} ----> {empDetails[k]}</p>
     )) 
   }

   <br/><br/><hr/><hr/><br/>

   <h1>Employee details manual access</h1>
   <p>Eno : {empDetails["eno"]}</p>
   <p>Enm : {empDetails.enm}</p>
   <p>Esal : {empDetails.esal}</p>

 <br/><br/><hr/><hr/><br/>
   <h1>Array element loop access</h1>
   {
     mks.map((v,i)=>(
      <p>{v}</p>
     ))
   }

    <br/><br/><hr/><hr/><br/>

   <h1>Array element manual access</h1>
   <p>marks1 : {mks[0]}</p>
   <p>marks2 : {mks[1]}</p>
   <p>marks3 : {mks[2]}</p>
   <p>marks4 : {mks[3]}</p>
   <p>marks5 : {mks[4]}</p>


   <br/><br/><hr/><hr/><br/>

   <h1>Counter : {counter} </h1>
   <button onClick={incrementCount} >+</button>
   &nbsp;&nbsp;
   <button onClick={decrementCount}>-</button>

   <br/><br/><hr/><hr/><br/>


   <h1>Timer</h1>
   <p>{cDate}</p> 

   <br/><hr/><hr/><br/>
   <h1>Add Result</h1>
   <p>a = {a}</p>
   <p>b = {b}</p>
   <p>c = {a+b}</p>

   </div>	
  );
}

export default About;
