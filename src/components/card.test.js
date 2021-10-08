import {shallow} from 'enzyme';
import Card from './card'
import React from 'react'

it("Testing the card component", ()=>{
  expect(shallow(<Card />)).toMatchSnapshot()
})