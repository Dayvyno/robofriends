import React from 'react';

class CounterButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {count:0}
  }

  onCounter=()=>{
    this.setState(state=>{return{count:state.count+1}})
  }

  render(){
    return(
      <div style={{textAlign:'center'}}>
        <button  onClick={this.onCounter} >
          Count: {this.state.count}
        </button>
      </div>
    )
  }
}

export default CounterButton