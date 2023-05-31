import React,{useEffect,useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
     axios.get('http://localhost:8000/api/contactdetails').then((res)=> {setData(res.data.data)});
  },[])

  return (
    <div>
       <h4>Contact List</h4> 
       <br></br>
        <table className="table">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
          {data.map((value)=>(
             <tr>
              <td>{value.id}</td>
               <td>{value.name}</td>
                <td>{value.phone}</td>
             </tr>
          ),)}
        </table>

    </div>
  );
}

export default App;
