import React from 'react';

class Header extends React.Component{
  shouldComponentUpdate(){
    return false;
  }

  render(){
    console.log("Header")
    return (
    <div>
      <h1 style={{textAlign:'center'}}>ROBOFRIENDS</h1>
    </div> 
    )
  }
}

export default Header