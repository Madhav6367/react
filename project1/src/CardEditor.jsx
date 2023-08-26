import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardEditor = () => {
    const [count,setCount]= useState(0);
    const Add=()=>{
      setCount(count+1)
      if(count===100){
        alert("100 Count Completed")
      }
  
    }
    const Subtract=()=>{
         setCount(count-1)
         if(count<=0){
          alert("Count is not in Negative")
         }
        
    }
  return (

    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Count Down Start</Card.Title>
      <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
      <Card.Text>
      Count:{count}      
      </Card.Text>
      <Button  variant="primary mx-4"  onClick={Add}>+</Button>
    
      <Button  variant="danger mx-4" onClick={Subtract}>-</Button>
      
    </Card.Body>
  </Card>

    
  )
}

export default CardEditor
