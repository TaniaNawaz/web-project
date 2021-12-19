import React from 'react';
import Card from "./Card.jsx";
import Sdata from "./Sdata.jsx";
import "./index.css";

function App() {
  return (
     <div className="App">
     {Sdata.map((val)=>{
       return(
      <Card name={val.Name} 
        image={val.img} 
        Email={val.Email} 
        phone={val.Phone} 
        company={val.Company}
        website={val.Website}
        Address={val.Address}
  /> 
  )
     })},
    </div>
  );
}

export default App;
