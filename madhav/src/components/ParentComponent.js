import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  const [Data,setData]= useState();
  const HandleChild=(children)=>{
    setData(children)
  }
  return (
    <div>
    
      <ChildComponent onDataFromChild={HandleChild}/>
      {Data}
    </div>
  )
}

export default ParentComponent
