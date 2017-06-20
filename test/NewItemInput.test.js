import React from 'react';
import { shallow } from 'enzyme';
import NewItemInput from '../src/react-components/Items/NewItemInput.js';
import { expect } from 'chai';

describe('NewItemInput', function(){
  const wrapper = shallow(<NewItemInput />);
  it('should intialize as hidden', function(){
    expect(wrapper.state().hidden).to.be.true;
  });
  it('should contain 3 input boxes', function(){
    expect(wrapper.find('Input').length).to.be(3);
  });
  it('should contain a submit button', function(){
    expect(wrapper.find('.newItemSubmit').length).to.be(1);
  });
  it('should contain a clear button', function(){
    expect(wrapper.find('.newItemClear').length).to.be(1);
  });
  it('local state should clear on submit');
  it('local state should clear on clear');
});
