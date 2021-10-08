import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(()=>{
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it("It renders mainpage without crashing", ()=>{
  expect(wrapper).toMatchSnapshot()
})

it("It filters robots correctly", ()=>{
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      name: 'Johna',
      id: 3,
      mail: "john@gmail.com"
    }],
    searchField: 'a',
    isPending: false,
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  // expect(wrapper2.instance().filteredRobots()).toEqual([])
  expect(wrapper2.instance().filteredRobots()).toEqual([
    {
      name: 'Johna',
      id: 3,
      mail: "john@gmail.com"
    }
  ])
})

it("It filters robots correctly2", ()=>{
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      name: 'John',
      id: 3,
      mail: "john@gmail.com"
    }],
    searchField: 'a',
    isPending: false,
  }
  const filteredRobot = []
  const wrapper3 = shallow(<MainPage {...mockProps3} />)
  // expect(wrapper2.instance().filteredRobots()).toEqual([])
  expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobot)
})