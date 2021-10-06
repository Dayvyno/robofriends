import React from "react";
import './card.css'

class Card extends React.Component{
  render(){
    const {name, id, email} = this.props
    return(
      <div>
        <div className="robohash" >
          <p>Name: {name}</p> 
          <img src= {`https://robohash.org/${id}?size=200x200`}  alt={`${id}`} />
          <p>Email:{email} </p>  
        </div>
      </div>
    )
  }
}

export default Card