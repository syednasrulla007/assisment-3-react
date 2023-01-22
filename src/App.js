import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
  const[state,showstate]=useState(true)

  const[a,seta]=useState({
    Name:"",
    Department:"",
    Rating:"",
    empolyee:[]
  })

function changename(e){
seta({...a,[e.target.name]:e.target.value})

  }
  function addtask(){
    showstate(!state)
    const empObj={
      Name:a.Name,
      Department:a.Department,
      Rating:a.Rating
    }
    const temp=a.empolyee
    temp.push(empObj)
    seta({empolyee:temp})
  }
  function back(){
    showstate(!state)
  }
  return (
    <div>
       
    {state?
    <div className="container"><h2>EMPOLYEE FEEDBACK FORM</h2>
     <div>Name: <input type="text" name='Name' value={a.Name} onChange={changename}></input> </div>
     <br></br>
     <div>Department: <input type="text" name='Department' value={a.Department} onChange={changename}></input> </div>
     <br></br>
     <div>Rating: <input type="number" name='Rating' value={a.Rating} onChange={changename} ></input> </div>
     <br></br>
     <button onClick={addtask}>Submit</button>
     
     </div>
     :
     <div className='container3' >
      <h1>EMPOLYEE FEEDBACK DATA</h1>
     <div className="container2">
  {
    a.empolyee.map((value,index)=>{
      return(
        <div key={index} id="childContainer">Name:{value.Name}| Department:{value.Department}| Rating:{value.Rating}</div>
      )
    }
    )
  }
 
</div>
<button onClick={back}>Go Back</button>
     </div>
     }
  
    </div>
  )
}

export default App
