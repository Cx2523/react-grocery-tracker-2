import React from 'react';
import * as d3 from 'd3';
import {Segment} from 'semantic-ui-react';

class BarChart extends React.Component{
    constructor(){
      super();
      this.createBarChart = this.createBarChart.bind(this);
    }

    componentDidMount(){
      this.createBarChart();
    }

    createBarChart(){
      let barVerticalPadding = 5;
      let svgHeightString = d3.select(this.node).style('height');
      let svgHeight = parseInt(svgHeightString.substr(0, svgHeightString.length - 2));
      let barHeight = svgHeight / this.props.items.length;


      d3.select(this.node)
        .selectAll('rect')
          .data(this.props.items)
        .enter().append('rect')
          .attr('width', d => d.cost * 100)
          .attr('height', barHeight - barVerticalPadding)
          .attr('y', (d, i) => i * barHeight);
    }

    render(){
      return (
        <Segment raised className='chart-container'>
          <svg ref={node => this.node = node}></svg>
        </Segment>
      );
  }
}

export default BarChart;
