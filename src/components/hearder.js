import React from 'react';
import CounterButton from './counterButton';

class Header extends React.Component{
  shouldComponentUpdate(){
    return false;
  }

  render(){
    console.log("Header")
    return (
    <div>
      <h1 style={{textAlign:'center'}}>ROBOFRIENDS</h1>
      <CounterButton/>
    </div> 
    )
  }
}

export default Header