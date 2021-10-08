import React from 'react';

class CounterButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {count:0}
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.state.count !== nextState.count){
      return true
    }
    return false
  }

  onCounter=()=>{
    this.setState(state=>{return{count:state.count+1}})
  }

  render(){
    return(
        <button color={this.props.color}  
        style={{textAlign:'center', width:'100%'}}
        onClick={this.onCounter} 
        id='counter'>
          Count: {this.state.count}
        </button>
    )
  }
}

export default CounterButton