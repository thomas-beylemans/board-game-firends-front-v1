import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveCity, signUp } from '../../../actions/user';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Button, Grid, Image, Checkbox, Header, Icon, Popup, Input } from 'semantic-ui-react';
import bg_img from '../../../assets/img/bg_home2.jpg';

import ControlledInput from '../../ControlledInput';

import './styles.scss';

export default function Register() {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState('');
  const [errorAuth, setErrorAuth] = useState('');
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [suggestedCity, setSuggestedCity] = useState([]);
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const apiError = useSelector(state => state.user.errorMessage);
  const password = useSelector(state => state.user.password);
  const passwordConfirm = useSelector(state => state.user.passwordConfirm);
  const postcode = useSelector(state => state.user.postcode);

  const handleChangeCity = (e) => {
    axios.get(`https://geo.api.gouv.fr/communes?nom=${e.target.value}&fields=code,nom,centre,departement,codesPostaux`)
    .then(res => {
          setSuggestedCity(res.data);
        })
    setCity(e.target.value);
  };


  const handleSubmit = (e) => {
    setError(false);
    setPasswordOpen(false);
    setAuthOpen(false);
    if (apiError === 500) {
      setAuthOpen(true);
      setErrorAuth('Problème avec le serveur');
    }
    if (password !== passwordConfirm) {
      setErrorPassword('Les mots de passe ne correspondent pas');
      setError(true);
      setPasswordOpen(true);
    }
    e.preventDefault();
    setIsLoading(true);
    const selectedCity = suggestedCity.filter(el => { return el.nom === city; }).filter(el => { return el.codesPostaux.includes(postcode); });
    dispatch(saveCity(selectedCity[0]))
    .then(() => {
      dispatch(signUp());
    })
    .finaly(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="register">
      <Grid columns={2} stackable className="register__container">
        <Grid.Row className="register__container__row">
          <Grid.Column textAlign="left" className="register__container__column">
            <Image className="register__container__column__img" src={bg_img} />
            <Grid.Row>
              <Header className="register__container__column__h1" as='h1'>Bienvenue sur Board Game Friends</Header>
              <Header className="register__container__column__h2" as='h2'>Trouvez des joueurs autour de vous pour compléter vos parties !</Header>
              <Header.Subheader className="register__container__column__sub">
                Prêts à nous rejoindre ? Inscrivez-vous !
              </Header.Subheader>
            </Grid.Row>
            <Grid columns={3} className="register__container__footer">
              <Grid.Row>
                <Grid.Column width={2}><Link to="/faq" className="register__container__footer__nav">F.A.Q</Link></Grid.Column>
                <Grid.Column width={2}><Link to="/terms-of-use" className="register__container__footer__nav">CGU</Link></Grid.Column>
                <Grid.Column width={2}><Link to="/team" className="register__container__footer__nav">Contact</Link></Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column textAlign="center" className="register__container__column">
            <Grid.Row>
              <Header as='h2' icon textAlign='center' className="home__container__column__header">
                <Icon name='save' circular />
                <Header.Content>S'enregistrer</Header.Content>
              </Header>
              <form onSubmit={handleSubmit} autoComplete="off">
                <Grid.Row>
                  <ControlledInput className="register__container__column__input" label='E-mail' name="email" type="email" placeholder="Email" />
                </Grid.Row>
                <Grid.Row>
                  <ControlledInput className="register__container__column__input" label='Pseudo' name="username" type="text" placeholder="Pseudo" />
                </Grid.Row>
                <Grid.Row>
                  <Input className="register__container__column__input" label='Ville' name="city" type="text" placeholder="Ville" list="cities" onChange={handleChangeCity} />
                  <datalist id="cities">
                    {
                      suggestedCity.map(city => (
                        <option key={city.code} value={city.nom} />
                      ))
                    }
                  </datalist>
                  <Grid.Row>
                  <ControlledInput className="register__container__column__input" label='Code Postal' name="postcode" type="text" placeholder="Code Postal" />
                </Grid.Row>
                </Grid.Row>
                <Grid.Row>
                  <Popup
                    content={errorPassword}
                    open={passwordOpen}
                    position='top center'
                    on={'click'}
                    onClose={() => setPasswordOpen(false)}
                    trigger={
                      <ControlledInput
                        className="register__container__column__input"
                        label='Mot de passe'
                        name="password"
                        type="password"
                        placeholder="Mot de passe"
                        error={error}
                      />
                    }
                  />
                </Grid.Row>
                <Grid.Row>
                  <ControlledInput
                    className="register__container__column__input"
                    label='Répéter' name="passwordConfirm"
                    type="password"
                    placeholder="Mot de passe"
                    error={error}
                  />
                </Grid.Row>
                <Checkbox className="home__container__column__checkbox" toggle label="J'accepte les conditions générales d'utilisation" />
                <Grid.Row>
                  <Popup
                    content={errorAuth}
                    open={authOpen}
                    position='top center'
                    on={'click'}
                    onClose={() => setAuthOpen(false)}
                    trigger={
                      <Button
                        className="register__container__column__button"
                        color="orange"
                        size="big"
                        type="submit"
                        loading={isLoading}
                      >
                        S'enregistrer
                      </Button>
                    }
                  />
                </Grid.Row>
              </form>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
};
