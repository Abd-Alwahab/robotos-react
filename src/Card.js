import React from 'react';
import './Card.css';


const Card = ({name,job,id}) => {

    return (

        <div>
          <div className="card">
           
                <img src={`https://robohash.org/${id}' alt="potot`}/>
                <div>
                    <h1>{name}</h1>
                    <p>{job}</p>
               
                </div>
            </div>
        </div>
    );
}

export default Card;