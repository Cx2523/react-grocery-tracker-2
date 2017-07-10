import React from 'react';
import * as d3 from 'd3';
import {Segment, Select} from 'semantic-ui-react';

class BarChart extends React.Component{
    constructor(){
      super();
      this.state = {
        sortMethod: 'List'
      }
      this.createBarChart = this.createBarChart.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount(){
      this.createBarChart();
    }
    componentDidUpdate(){
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

    sortData(order){
      let arrayCopy = this.props.items.map(item => Object.assign({}, item));
      let sortedArray;
      switch (order) {
        case 'highToLow':
          sortedArray = arrayCopy.sort((a, b) => b.cost - a.cost);
          break;
        case 'lowToHigh':
          sortedArray = arrayCopy.sort((a, b) => a.cost - b.cost);
          break;
        default:
          sortedArray = arrayCopy;
      }
      return sortedArray;
    }

    createBarChart(){
      let sortedData = this.sortData(this.state.sortMethod);
      //width parameters
      let barWidthPadding = 0.03;
      let svgWidth = this.getSvgDimensions().width;
      //height parameters
      let svgHeight = this.getSvgDimensions().height;
      let axisOffset = 0.1 * svgHeight;
      let barHeight = (svgHeight - axisOffset) / sortedData.length;
      let barHeightPadding = 0.1 * barHeight;
      //get maxCost for width dimensions
      let maxCost = d3.max(sortedData, d => +d.cost);
      //scales
      let color = d3.scaleOrdinal(d3.schemeCategory20);
      let widthScale = d3.scaleLinear()
        .domain([0, maxCost])
        .range([0, svgWidth - svgWidth * barWidthPadding ]);

      d3.select(this.node)
        .selectAll('rect')
        .data(sortedData)
          .attr('width', d => widthScale(d.cost))
          .attr('height', barHeight - barHeightPadding)
          .attr('y', (d, i) => i * barHeight)
        .enter().append('rect')
          .attr('width', d => widthScale(d.cost))
          .attr('height', barHeight - barHeightPadding)
          .attr('y', (d, i) => i * barHeight)
          .attr('fill', d => color(d.cost));

      d3.select(this.node)
        .selectAll('text')
        .data(sortedData)
          .attr('fill', 'black')
          .attr('text-align', 'center')
          .attr("transform", (d, i) => `translate(${widthScale(d.cost)/2}, ${i*barHeight + barHeight / 2 + 3})`)
          .text(d => d.name)
        .enter().append('text')
          .attr('fill', 'black')
          .attr('text-align', 'center')
          .attr("transform", (d, i) => `translate(${widthScale(d.cost)/2}, ${i*barHeight + barHeight / 2 + 3})`)
          .text(d => d.name);

      d3.select(this.node)
        .selectAll('g')
        .data([1]) //'trick' d3 into creating 1 copy of the axis only in the entry phase
        .enter()
        .append('g')
        .attr("transform", `translate(0, ${svgHeight - axisOffset})`)
        .call(d3.axisBottom(widthScale));

    }

    handleSelect(event, data){
      this.setState({sortMethod: data.value});
    }

    render(){
      return (
        <Segment raised className='chart-container'>
          <h3>Saved Items</h3>
          <Select id="sort-bar-chart"
            compact
            placeholder='Sort'
            options={[
              {key: 'list', value: 'list', text: 'List'},
              {key: 'highToLow', value: 'highToLow', text: 'High to Low'},
              {key: 'lowToHigh', value: 'lowToHigh', text: 'Low to High'}
            ]}
            onChange={this.handleSelect} />
          <svg ref={node => this.node = node}></svg>
        </Segment>
      );
  }
}

export default BarChart;
