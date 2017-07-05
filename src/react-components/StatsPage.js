import React from 'react';
import * as d3 from 'd3';
import BarChart from './charts/BarChart.js';


const StatsPage = (props) => {
  return (
    <div>
      <h1>Stats Page</h1>
      <BarChart items={props.items} />
    </div>);
}

export default StatsPage;
