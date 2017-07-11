import React from 'react';
import * as d3 from 'd3';
import { Segment } from 'semantic-ui-react';

class PieChart extends React.Component{
  constructor(){
    super();
    this.createPieChart = this.createPieChart.bind(this);
  }

  componentDidMount(){
    this.createPieChart();
  }

  getSvgDimensions(){
    let heightString = d3.select(this.node).style('height');
    let height = parseInt(heightString.substr(0, heightString.length - 2));
    let widthString = d3.select(this.node).style('width');
    let width = parseInt(widthString.substr(0, widthString.length - 2));
    return {
      width,
      height
    }
  }

  averageShoppingLists(){
    let numberOfLists = this.props.shoppingLists.length;
    let averageList = [];
    let findItemInAverageList = (item, averageList) => {
      return averageList.find((averageItem) => {
        return averageItem.name === item.name;
      })
    }
    this.props.shoppingLists.map(shoppingList => shoppingList.list).forEach(list => {
      list.forEach(item => {
        if(findItemInAverageList(item, averageList)){
          console.log('item already exists');
        } else {
          averageList.push(item);
        }
      });
    });
    console.log(averageList);

  }

  createPieChart(){
    this.averageShoppingLists();
    let radius = Math.min(this.getSvgDimensions().width, this.getSvgDimensions().height) / 2;

    let pie = d3.pie()
      .sort(null)
      .value(d => d.cost);
    let path = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

  }

  render(){
    return (
      <Segment>
        <svg ref={node => this.node = node}></svg>
      </Segment>
    );
  }
}

export default PieChart;
