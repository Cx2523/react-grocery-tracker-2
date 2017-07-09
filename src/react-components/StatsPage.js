import React from 'react';
import * as d3 from 'd3';
import { Grid, Segment } from 'semantic-ui-react';

import BarChart from './charts/BarChart.js';
import BubbleChart from './charts/BubbleChart.js';

const StatsPage = (props) => {
  return (
    <Grid columns={3} height divided padded>
      <Grid.Row>
        <Grid.Column width={4}>
          <BarChart items={props.items} />
        </Grid.Column>
        <Grid.Column width={8}>
          <BubbleChart items={props.items} />
        </Grid.Column>
        <Grid.Column width={4}>
          <BarChart items={props.items} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <BubbleChart items={props.items} />
        </Grid.Column>
        <Grid.Column width={8}>
          <BarChart items={props.items} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default StatsPage;
