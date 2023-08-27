import './App.css';
import AComponent from './AComponent';
// import Cardimage from './Cardimage';
// import Navbar from "./Navbar"
// import Crousel from "./Crousel";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Imagedata from "./Imagedata"
// import { useEffect } from 'react'; 
// import ParentComponent from './components/ParentComponent';
// const ncard=(val)=>{
//   return <Cardimage title={val.title} imgsrc={val.image} desc={val.price}/>
// }

function App() { 
  // const [Data,setData]=useState([]);

  // useEffect(()=>{
// const fetchdata= async ()=>{
//   try{
//   const response = await fetch('https://fakestoreapi.com/products')
//   const data= await response.json();
//   setData(data);
//   }catch(error){
//       console.log("Error Occured",error)
//   }
// }
// fetchdata();
//   },[])
  return (
//     <div >
//      <Navbar/>
//      <Crousel/>
//     <div className='row'>
//      {Data.map((val,index)=>(
//        <div key={val.id} className='col-md-4'>
//        {ncard(val)}
//        </div>
//       ))}
//      </div>
//     </div>
// <div>
//      <ParentComponent/>
//     </div>
<AComponent/>
  );
     }

export default App;

     