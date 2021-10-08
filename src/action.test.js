import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD ,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants"

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import nock from 'nock'

const mockStore = configureStore([thunkMiddleware]) /*You can export so it will be available for all my test*/


it('Should create an action to search robots', ()=>{
  const text = 'wooo'
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text 
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it("Handles requesting robots API", ()=>{
  const store = mockStore()
  store.dispatch(actions.requestRobots())
  const action = store.getActions()
  // console.log(`Action: ${action}`)
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  }

  expect(action[0]).toEqual(expectedAction)
})


