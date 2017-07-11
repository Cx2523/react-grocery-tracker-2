import React from 'react';
import * as d3 from 'd3';
import {Segment} from 'semantic-ui-react';

class BubbleChart extends React.Component{
    constructor(){
      super();
      this.createBubbleChart = this.createBubbleChart.bind(this);
    }

    componentDidMount(){
      this.createBubbleChart();
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

    createBubbleChart(){
      let maxDiameter = this.getSvgDimensions().height;
      let color = d3.scaleOrdinal(d3.schemeCategory20);
      let hierarchy = d3.hierarchy({children: this.props.items});
      hierarchy.sum(d => d.cost);

      let bubbleLayout = d3.pack()
        .size([maxDiameter, maxDiameter])
        .padding(1.5);

      let bubbleNodes = bubbleLayout(hierarchy);

      d3.select(this.node).attr("class", "bubbleLayout");

      let bubbles = d3.select(this.node).append("g")
        .selectAll(".bubbleLayout")
        .data(bubbleNodes.children)
        .enter();

      bubbles.append("circle")
        .attr('r', d => d.r)
        .attr('transform', d => `translate(${d.x},${d.y})`)
        .attr('fill', d => color(d.r));

      bubbles.append("text")
        .attr('transform', d => `translate(${d.x},${d.y})`)
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .text(d => d.data.name);
    }

    render(){
      return (
        <Segment raised className='chart-container'>
          <svg ref={node => this.node = node}></svg>
        </Segment>
      );
  }
}

export default BubbleChart;
