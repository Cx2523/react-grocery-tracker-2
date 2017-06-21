import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/react-components/App.js';
import { expect } from 'chai';

describe('App initialization',function(){
  const wrapper = shallow(<App />);
  it('renders without exploding', function(){
    expect(wrapper.isEmptyRender()).to.be.false;
  });
  describe('renders with state containing', function(){
    it('An empty item object',function(){
      expect(wrapper.state().items).to.be.a('array').and.to.be.empty;
    });
    it('An empty list object',function(){
      expect(wrapper.state().lists).to.be.a('array').and.to.be.empty;
    });
    it('An empty stats object',function(){
      expect(wrapper.state().stats).to.be.a('object').and.to.be.empty;
    });
  });
});
