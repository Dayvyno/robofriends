import React from 'react';
import './App.css';
import { requestRobots, setSearchField } from '../actions';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';

const mapStateToProps = state =>{
  return{
    searchField: state.searchFieldState.searchField,
    robots: state.robotsState.robots,
    isPending: state.robotsState.isPending,
    error: state.robotsState.error
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: ()=>dispatch(requestRobots()) /* requestRobots(dispatch)   ---> This will work too*/
  }
}

class App extends React.Component{

  render(){
    return <MainPage {...this.props} />
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)