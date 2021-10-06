import React from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import './App.css';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/errorBoundry';
import { requestRobots, setSearchField } from '../actions';
import { connect } from 'react-redux';
import Header from '../components/hearder';

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

  componentDidMount(){
    this.props.onRequestRobots()
  }

  render(){
    const {searchField, onSearchChange, robots, isPending} = this.props
  
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
  
    return(
      <div>
        {
        isPending? <h1>Loading....</h1> :
        <div style={{padding:"5px"}} >
          <Header/>
          <SearchBox searchHandler={onSearchChange}/>
          <Scroll >
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
        }
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)