import React from 'react';
import Card from './card';
import "./cardList.css"

class CardList extends React.Component{
  
  render(){
    return (
      <div >
        <div className="container">
          {this.props.robots.map((robot)=>{
            return (
              <Card 
              name={robot.name} 
              email ={robot.email} 
              id={robot.id} 
              key={robot.id} 
              />
            )
        })}
        </div>
      </div>
    )
  }
}
export default CardList