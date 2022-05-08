import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../../actions/user';

import { Button, Grid, Image, Checkbox, Header, Icon } from 'semantic-ui-react';
import bg_img from '../../../assets/img/bg_home2.jpg';

import ControlledInput from '../../ControlledInput';

import './styles.scss';

export default function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  return (
    <div className="home">
      <Grid columns={2} stackable className="home__container">
        <Grid.Row className="home__container__row">
          <Grid.Column textAlign="left" className="home__container__column">
            <Image className="home__container__column__img" src={bg_img} />
            <Grid.Row>
              <Header className="home__container__column__h1" as='h1'>Bienvenue sur Board Game Friends</Header>
              <Header className="home__container__column__h2" as='h2'>Trouvez des joueurs autour de vous pour compléter vos parties !</Header>
              <Header.Subheader className="home__container__column__sub">
                Prêts à nous rejoindre ? Inscrivez-vous !
              </Header.Subheader>
            </Grid.Row>
            <Grid columns={3} className="home__container__footer">
              <Grid.Row>
                <Grid.Column width={2}><Link to="/faq" className="home__container__footer__nav">F.A.Q</Link></Grid.Column>
                <Grid.Column width={2}><Link to="/terms-of-use" className="home__container__footer__nav">CGU</Link></Grid.Column>
                <Grid.Column width={2}><Link to="/team" className="home__container__footer__nav">Contact</Link></Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column textAlign="center" className="home__container__column">
            <Grid.Row>
              <Header as='h2' icon textAlign='center' className="home__container__column__header">
                <Icon name='unlock' circular />
                <Header.Content>Connexion</Header.Content>
              </Header>
              <form onSubmit={handleSubmit}>
                <Grid.Row>
                  <ControlledInput className="home__container__column__input" label='E-mail' name="email" type="email" placeholder="Email" />
                </Grid.Row>
                <Grid.Row>
                  <ControlledInput className="home__container__column__input" label='Mot de passe' name="password" type="password" placeholder="Mot de passe" />
                </Grid.Row>
                <Checkbox className="home__container__column__checkbox" toggle label="J'accepte les conditions générales d'utilisation" />
                <Grid.Row>
                  <Button
                    className="home__container__column__button"
                    color="orange"
                    size="big"
                    type="submit"
                  >
                    Connexion
                  </Button>
                </Grid.Row>
              </form>
            </Grid.Row>
            <Grid.Row>
              <Button
                className="home__container__column__button"
                color="orange"
                size="big"
                type="button"
                disabled
              >
                Mot de passe oublié
              </Button>
            </Grid.Row>
            <Grid.Row>
              <Link to="/register">
                <Button
                  className="home__container__column__button"
                  color="orange"
                  size="big"
                  type="button"
                >
                  Inscrivez-vous
                </Button>
              </Link>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
};
