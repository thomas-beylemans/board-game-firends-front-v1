import { Link } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';
import './styles.scss';

export default function Footer() {
  return (
    <div className="footer">
      <Grid columns={3}>
        <Grid.Column className="footer__column">
      <Grid.Row>
        <Header as="h2" className="footer__column__title">En savoir plus...</Header>
        </Grid.Row>
        <Grid.Row className="footer__row">
        <Link to="/faq" className="footer__column__link">F.A.Q</Link>
        </Grid.Row>
        <Grid.Row className="footer__row">
        <Link to="/terms-of-use" className="footer__column__link">CGU</Link>
        </Grid.Row>
        <Grid.Row className="footer__row">
        <Link to="/team" className="footer__column__link">Contact</Link>
        </Grid.Row>
        </Grid.Column>
      </Grid>
      Board Game Friends - © 2022
    </div>
  );
};
