import React,{useContext} from 'react'
import DataContext from './DataContext'


const DComponents = () => {
  const shareData = useContext(DataContext);
  return (
    <div>
      DComponents
      <p>Car Purchased by Madhav:{shareData}</p>
    </div>
  )
}

export default DComponents
