import React from 'react';

function Card(props){
    return(
    <div>
    <div className="container">
        <img  src={props.image} alt="img not found"/>
        <span className="info">
          <h1>{props.name}</h1>
          <br/>
          <p><strong>Email:</strong>{props.Email}</p>
          <p><strong>Phone:</strong>{props.phone}</p>
          <p><strong>Company:</strong>{props.company}</p>
          <p><strong>Website:</strong>{props.website}</p>
          <p><strong>Address:</strong>{props.Address}</p>
        </span>
     </div>
     <br/>
     </div>
    );
}

export default Card;
