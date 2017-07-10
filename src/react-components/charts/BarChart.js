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
      //width parameters
      let barWidthPadding = 0.05;
      let svgWidth = this.getSvgDimensions().width;
      //height parameters
      let svgHeight = this.getSvgDimensions().height;
      let axisOffset = 0.1 * svgHeight;
      let barHeight = (svgHeight - axisOffset) / this.props.items.length;
      let barHeightPadding = 0.1 * barHeight;
      //get maxCost for width dimensions
      let maxCost = d3.max(this.props.items, d => +d.cost);
      //scales
      let color = d3.scaleOrdinal(d3.schemeCategory20);
      let widthScale = d3.scaleLinear()
        .domain([0, maxCost])
        .range([0, svgWidth - svgWidth * barWidthPadding ]);

      d3.select(this.node)
        .selectAll('rect')
          .data(this.props.items)
        .enter().append('rect')
          .attr('width', d => widthScale(d.cost))
          .attr('height', barHeight - barHeightPadding)
          .attr('y', (d, i) => i * barHeight)
          .attr('fill', d => color(d.cost));

      d3.select(this.node)
        .append('g')
        .attr("transform", "translate(0," + (svgHeight - axisOffset / 2) + ")")
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
