import React from 'react'
import {useState} from 'react'
import './Temperature.css'
const Temperature = () => {
    const [Celcius,setCelcius]=useState()
    const [Farenith,setFarenith]=useState()
    const HandleCelcius=(e)=>{
        const value=e.target.value
        setCelcius(value)
        setFarenith(ctof(value));
    }
    const HandleFarenith=(e)=>{
         const value=e.target.value
        setFarenith(value)
        setCelcius(ftoc(value))

    }
    const ftoc=(Farenith)=>{
        return ((Farenith-32)*5)/9;
    }
    const ctof=(Celcius)=>{
        return (Celcius*9)/5+32;
    }
  return (
    <div className='Edit'>
    <div className='background'>
     <div> <h1>Temperature Converter</h1> </div>
     <div>
     <label ><h3>Celcius:</h3></label>
     <input type="text" value={Celcius} onChange={HandleCelcius} />
     </div>
     <div>
      <label ><h3>Farenith:</h3></label>
      <input type="text" value={Farenith} onChange={HandleFarenith} /></div>
      </div>
</div>
  )
}

export default Temperature
