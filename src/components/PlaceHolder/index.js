import PropTypes from 'prop-types';

import { Grid, Placeholder, Segment, Header } from 'semantic-ui-react';

export default function PlaceHolder({ array, title }) {
  return (
    <Segment className='games-segment' color='orange' padded>
    <Header as='h1' color='orange'>{title}</Header>
    <Grid columns={3} stackable>
      {
        array.map((card) => (
          <Grid.Column key={card.id}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
        ))
      }
    </Grid>
    </Segment>
  );
};

PlaceHolder.propTypes = {
  title: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

