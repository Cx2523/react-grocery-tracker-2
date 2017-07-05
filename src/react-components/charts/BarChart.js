import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component{
    constructor(){
      super();
      this.createBarChart = this.createBarChart.bind(this);
    }

    componentDidMount(){
      this.createBarChart();
    }

    createBarChart(){
      d3.select(this.node)
        .selectAll('rect')
          .data(this.props.items)
        .enter().append('rect')
          .attr('width', d => d.cost * 100)
          .attr('height', 50)
          .attr('y', d => d.id * 55);
    }



    render(){
      return (
        <svg ref={node => this.node = node} height={1000} width={1000}></svg>
      );
  }
}

export default BarChart;
