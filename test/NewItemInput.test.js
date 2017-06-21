import React from 'react';
import { mount, shallow } from 'enzyme';
import NewItemInput from '../src/react-components/Items/NewItemInput.js';
import { expect } from 'chai';

describe('NewItemInput', function(){
  const wrapper = shallow(<NewItemInput />);
  it('should intialize as hidden', function(){
    expect(wrapper.state().hidden).to.be.true;
  });
  it('should contain 3 input boxes', function(){
    expect(wrapper.find('input').length).to.equal(3);
  });
  const buttons = wrapper.find('button');
  it('should contain 2 buttons', function(){
    expect(buttons.length).to.equal(2);
  });
  it('local state should clear on submit', function(){

  });
  it('local state should clear on clear');
});
