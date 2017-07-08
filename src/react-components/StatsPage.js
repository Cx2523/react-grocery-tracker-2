import React from 'react';
import * as d3 from 'd3';
import { Grid, Segment } from 'semantic-ui-react';

import BarChart from './charts/BarChart.js';
import BubbleChart from './charts/BubbleChart.js';

const StatsPage = (props) => {
  return (
    <Grid columns={2} height divided padded>
      <Grid.Row>
        <Grid.Column>
          <BarChart items={props.items} />
        </Grid.Column>
        <Grid.Column>
          <BubbleChart items={props.items} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <BubbleChart items={props.items} />
        </Grid.Column>
        <Grid.Column>
          <BarChart items={props.items} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default StatsPage;
