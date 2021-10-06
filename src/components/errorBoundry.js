import React from "react";

class ErrorBoundry extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info){
    this.setState({hasError:true})
  }

  render(){
    if (this.state.hasError){
      return <h1>Ooops!!! that is not good</h1>
    } else return this.props.children
  }
}

export default ErrorBoundry