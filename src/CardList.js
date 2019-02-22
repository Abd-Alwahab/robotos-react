import React from "react";
import Card from './Card';
import './Card.css';


const CardList = ({robots}) => {

   
    return (

     <div className="content">
            {
                robots.map((user,i) =>
                {
                    return  (
                        <Card id={robots[i].id} 
                        name={robots[i].name} 
                        job={robots[i].job}/>
                    );
                })               
            }
    </div>
    );
}


export default CardList;