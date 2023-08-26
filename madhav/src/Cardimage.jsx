import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





const Cardimage =(props) => {
  const [count,setCount]=useState(0);
  const HandleClick=()=>{
    setCount(count+1)
    console.log("buttton clicked")
  };
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.imgsrc}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
       {props.desc}
      </Card.Text>
      <Button variant="primary" onClick={HandleClick}>Go somewhere</Button>
      {count}
    </Card.Body>
  </Card>

  )
}

export default Cardimage
