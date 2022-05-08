import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveCity, signUp } from '../../../actions/user';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Button, Grid, Image, Checkbox, Header, Icon, Input, Message } from 'semantic-ui-react';
import bg_img from '../../../assets/img/bg_home2.jpg';

import ControlledInput from '../../ControlledInput';

import './styles.scss';

export default function Register() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  
  const [suggestedCity, setSuggestedCity] = useState([]);
  const [city, setCity] = useState('');

  const password = useSelector(state => state.user.password);
  const passwordConfirm = useSelector(state => state.user.passwordConfirm);
  const postcode = useSelector(state => state.user.postcode);
  const errorAPI = useSelector(state => state.user.errorMessage);

  const handleChangeCity = (e) => {
    axios.get(`https://geo.api.gouv.fr/communes?nom=${e.target.value}&fields=code,nom,centre,departement,codesPostaux`)
      .then(res => {
        setSuggestedCity(res.data);
      })
    setCity(e.target.value);
  };


  const handleSubmit = async (e) => {
    setIsLoading(true);
      e.preventDefault();
      setPasswordError(false);
        if (password !== passwordConfirm) {
          setPasswordError(true);
          setErrorMessage('Les mots de passe ne correspondent pas');
          setIsHidden(false);
        }
      const selectedCity = suggestedCity.filter(el => { return el.nom === city; }).filter(el => { return el.codesPostaux.includes(postcode); });
      dispatch(saveCity(selectedCity[0]));
      dispatch(signUp())
  };

  useEffect(() => {
    if(errorAPI){
      setErrorMessage(errorAPI);
      setIsHidden(false);
      setIsLoading(false);
    }
  }, [errorAPI]);

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
              <Message hidden={isHidden} negative floating>{errorMessage}</Message>
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
                  <ControlledInput
                    className="register__container__column__input"
                    label='Mot de passe'
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                    error={passwordError}
                  />
                </Grid.Row>
                <Grid.Row>
                  <ControlledInput
                    className="register__container__column__input"
                    label='Répéter' name="passwordConfirm"
                    type="password"
                    placeholder="Mot de passe"
                    error={passwordError}
                  />
                </Grid.Row>
                <Checkbox className="home__container__column__checkbox" toggle label="J'accepte les conditions générales d'utilisation" />
                <Grid.Row>
                  <Button
                    className="register__container__column__button"
                    color="orange"
                    size="big"
                    type="submit"
                    loading={isLoading}
                  >
                    S'enregistrer
                  </Button>
                </Grid.Row>
              </form>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
};
