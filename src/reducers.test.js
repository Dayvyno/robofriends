import {
  CHANGE_SEARCH_FIELD ,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants"

import * as reducers from './reducers';

describe("searchRobots", ()=>{

  it('Should return the initial state', ()=>{
    const initialStateSearch = {
      searchField: ''
    }
    expect(reducers.searchFieldState(undefined, {})).toEqual({searchField: ''})
  })

  it('It should handle CHANGE_SEARCH_FIELD', ()=>{
    const initialStateSearch1 = {
      searchField: ''
    }
    expect(reducers.searchFieldState(initialStateSearch1, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({searchField: 'abc'})
  })
})


describe("Request robots reducer", ()=>{
  it('It should return the initial state', ()=>{
    const initialStateRobots = {
      robots: [],
      isPending: false, /* It is false bcos we havent started our test here */
      error: ''
    }
    expect(reducers.robotsState(undefined, {})).toEqual(initialStateRobots)
  })

  it("It should handle REQUEST_ROBOTS_PENDING", ()=>{
    const initialStateRobots = {
      robots: [],
      isPending: true,
      error: ''
    }
    expect(reducers.robotsState(initialStateRobots, {
      type:REQUEST_ROBOTS_PENDING
    })).toEqual(initialStateRobots)
  })

  it("It should handle REQUEST_ROBOTS_SUCCESS", ()=>{
    const initialStateRobots = {
      robots: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }],
      isPending: false,
      error: ''
    }
    expect(reducers.robotsState(initialStateRobots, {
      type:REQUEST_ROBOTS_SUCCESS,
      payload: initialStateRobots.robots
    })).toEqual(initialStateRobots)
  })

  it("It should handle REQUEST_ROBOTS_FAILED", ()=>{
    const initialStateRobots = {
      robots: [],
      isPending: false,
      error: 'Error loading robots'
    }
    expect(reducers.robotsState(initialStateRobots, {
      type:REQUEST_ROBOTS_FAILED,
      payload: initialStateRobots.error
    })).toEqual(initialStateRobots)
  })

})
