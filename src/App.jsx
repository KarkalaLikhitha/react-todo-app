import React, { useState } from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./App.css"

const App = () => {

  let [value, setValue] = useState()

  let [state, setState] = useState([])



  function inputvalue(event) {
   
      setValue(event.target.value)
    
  }


  function add() {

      if(!value ||value.trim()==""){
       return alert("please enter a task")
      }else{

        
        let obj = {
          id: Date.now(),
          task: value,
        }
        
        setState([...state, obj])
        setValue("")
      }
  }


function remove(e){


   let deleted= state.filter((i)=>i.id !=e);
   setState(deleted)



}




  return (
    <div className='container w-50'>

      <h3 className='text-center'> TO DO LIST</h3>
      <div className='input-group  w-100 mb-4' >
        <input type="text" placeholder='Enter your task here' className=' form-control w-75' onChange={inputvalue} value={value} />
        <button className='btn btn-primary' onClick={add}  disabled={!value || value.trim() === ""}> ADD</button>
      </div>

      <div>
        <ul className='list-group  '>

          {
            state.map((item) => {
              return (
                <li className='list-group-item d-flex'>

                  <p>{item.task}</p>
                  <button className='btn ' onClick={()=>remove(item.id)} >❌</button>

                </li>
              )
            })
          }

        </ul>
      </div>

    </div>
  )
}

export default App
