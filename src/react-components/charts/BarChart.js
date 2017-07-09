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

    createBarChart(){
      let barVerticalPadding = 5;
      let svgHeight = this.getSvgDimensions().height;
      let barHeight = svgHeight / this.props.items.length;
      let color = d3.scaleOrdinal(d3.schemeCategory20);
      let maxCost = d3.max(this.props.items, d => +d.cost);

      let widthScale = d3.scaleLinear()
        .domain([0, maxCost])
        .range([0, this.getSvgDimensions().width]);

      d3.select(this.node)
        .selectAll('rect')
          .data(this.props.items)
        .enter().append('rect')
          .attr('width', d => widthScale(d.cost))
          .attr('height', barHeight - barVerticalPadding)
          .attr('y', (d, i) => i * barHeight)
          .attr('fill', d => color(d.cost));

      d3.select(this.node)
        .append('g')
        .attr("transform", "translate(0," + svgHeight + ")")
        .call(d3.axisBottom(widthScale));

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
