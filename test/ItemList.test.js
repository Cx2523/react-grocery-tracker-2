import React from 'react';
import { mount, shallow } from 'enzyme';
import ItemsList from '../src/react-components/Items/ItemsList.js';
import { expect } from 'chai';


describe('ItemList',function(){
  it('should render 1 h1 if items array is empty',function(){
    const intialItemsList = [];
    const wrapper = shallow(<ItemsList items={intialItemsList} />);
    expect(wrapper.nodes.length).to.equal(1);
    expect(wrapper.nodes[0].type).to.equal('h1');
  });
  it('should render an Item component for every entry in items', function(){
    const testItemsList = [{
        name: 'test1',
        cost: 12,
        desc: 'test'
    },
    {
      name: 'test2',
      cost: 1,
      desc: 'test'
    },
    {
      name: 'test3',
      cost: 90,
      desc: 'test'
    }];
    const wrapper = shallow(<ItemsList items={testItemsList} />);
    expect(wrapper.find('Item').length).to.equal(testItemsList.length);
  });
});
