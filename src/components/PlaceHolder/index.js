import { Grid, Placeholder, Segment } from 'semantic-ui-react';

export default function PlaceHolder({ array }) {
  return (
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
  );
};
