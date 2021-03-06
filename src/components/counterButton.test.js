import {shallow} from 'enzyme';
import React from 'react';
import CounterButton from './counterButton';

it("Expect to render counterButton component", ()=>{
  const mockColor = 'red'
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
})

it("It correctly increaments the counter", ()=>{
  const mockColor = 'red'
  const wrapper =  shallow(<CounterButton color={mockColor}/>)
  wrapper.find('[id="counter"]').simulate('click')
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({count:2})
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({count:3})
  expect(wrapper.props().color).toEqual("red")
})