import {shallow} from 'enzyme';
import React from 'react'
import CardList from './cardList';

it("Testing the card component", ()=>{
  const mockRobots = [
    {
      id:1,
      name: "John Snow",
      email: "johnsnow@gmail.com",
      key: 1
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})