import './App.css';
import Cardimage from './Cardimage';
import Navbar from "./Navbar"
import Crousel from "./Crousel";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Imagedata from "./Imagedata"
const ncard=(val)=>{
  return <Cardimage title={val.title} imgsrc={val.imgsrc} desc={val.desc}/>
}

function App() {
  return (
    <div >
     <Navbar/>
     <Crousel/>
    <div className='row'>
     {Imagedata.map((val,index)=>(
      <div key={val.id} className='col-md-4'>
      {ncard(val)}
      </div>
     ))}
    </div>
    </div>
    
  );
     }

export default App;

     