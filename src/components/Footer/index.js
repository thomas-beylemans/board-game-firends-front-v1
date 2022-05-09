import { Link } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';
import './styles.scss';

export default function Footer() {
  return (
    <div className="footer">
      <Grid columns={3}>
        <Grid.Column>
      <Grid.Row>
        <Header as="h3">Links</Header>
        </Grid.Row>
        <Grid.Row>
        <Link to="/faq">F.A.Q</Link>
        </Grid.Row>
        <Grid.Row>
        <Link to="/terms-of-use">CGU</Link>
        </Grid.Row>
        <Grid.Row>
        <Link to="/team">Contact</Link>
        </Grid.Row>
        </Grid.Column>
      </Grid>
      Board Game Friends - © 2022
    </div>
  );
};
