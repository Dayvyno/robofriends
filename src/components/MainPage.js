import React from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import './mainPage.css';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/errorBoundry';
import Header from '../components/hearder';

class MainPage extends React.Component{

  componentDidMount(){
    this.props.onRequestRobots()
  }

  filteredRobots = ()=>{
    return this.props.robots.filter(robot=>{
     return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
   })
  }


  render(){
    const {onSearchChange, isPending} = this.props
  
    // const filteredRobots = robots.filter(robot=>{
    //   return robot.name.toLowerCase().includes(searchField.toLowerCase())
    // })
  
    return(
      <div>
        {
        isPending? <h1>Loading....</h1> :
        <div style={{padding:"5px"}} >
          <Header/>
          <SearchBox searchHandler={onSearchChange}/>
          <Scroll >
            <ErrorBoundry>
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundry>
          </Scroll>
        </div>
        }
      </div>
    )
  }
}


export default MainPage