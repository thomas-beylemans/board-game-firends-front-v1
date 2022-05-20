import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { signUp, checkCity } from '../../../actions/user';
import { clearError, saveError } from '../../../actions/error';
import { checkForm } from '../../../utils/checkForm';

import { Button, Grid, Image, Checkbox, Header, Icon, Popup, Dropdown, Label } from 'semantic-ui-react';
import bg_img from '../../../assets/img/background_home.jpg';

import ControlledInput from '../../ControlledInput';
import Alert from '../../Alert';

import './styles.scss';

export default function Register() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const [checked, setChecked] = useState(false);

  const [suggestedCity, setSuggestedCity] = useState([]);
  const [city, setCity] = useState('');

  const password = useSelector(state => state.user.password);
  const passwordConfirm = useSelector(state => state.user.passwordConfirm);
  const email = useSelector(state => state.user.email);
  const username = useSelector(state => state.user.username);
  const errorMessage = useSelector(state => state.error.errorMessage);

  const handleToggle = () => {
    setChecked(!checked);
  };

  const handleChangeCity = (e) => {
    const cityList = []
    axios.get(`https://geo.api.gouv.fr/communes?nom=${e.target.value}&boost=population&fields=code,nom,centre,departement,codesPostaux`)
      .then(res => {
        res.data.map(city => {
          cityList.push(
            {
              key: city.code,
              text: `${city.nom}, ${city.departement.code}`,
              value: `${city.nom}#${city.codesPostaux[0]}#${city.centre.coordinates[0]}#${city.centre.coordinates[1]}`,
            });
        });
        setSuggestedCity(cityList);
      })
  };

  const handleSelectCity = (e, { value }) => {
    setCity({
      "geo": {
        "city": value.split('#')[0],
        "postcode": value.split('#')[1],
        "long": value.split('#')[2],
        "lat": value.split('#')[3],
      }
    })
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    dispatch(checkCity(city));
    const checkedForm = checkForm(password, passwordConfirm, email, username, checked);
    if (checkedForm.passwordChecked) {
      setPasswordError(true);
      setIsHidden(false);
      dispatch(saveError(checkedForm.passwordChecked));
      setIsLoading(false);
      return;
    }
    if (checkedForm.emailChecked) {
      setIsHidden(false);
      dispatch(saveError(checkedForm.emailChecked));
      setIsLoading(false);
      return;
    }
    if (checkedForm.usernameChecked) {
      setIsHidden(false);
      dispatch(saveError(checkedForm.usernameChecked));
      setIsLoading(false);
      return;
    }
    if (checkedForm.termsChecked) {
      setIsHidden(false);
      dispatch(saveError(checkedForm.termsChecked));
      setIsLoading(false);
      return;
    }
    if (!checkedForm.passwordChecked && !checkedForm.emailChecked && !checkedForm.termsChecked) {
      dispatch(signUp());
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (errorMessage) {
      setIsHidden(false);
      setTimeout(() => {
        dispatch(clearError());
        setPasswordError(false);
        setIsHidden(true);
      }, 3000);
    }
  }, [dispatch, errorMessage]);

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
              <Header as='h2' icon textAlign='center' className="register__container__column__header">
                <Icon name='save' circular />
                <Header.Content>S'enregistrer</Header.Content>
              </Header>
              <div className="register__container__column__error">
                <Alert hidden={isHidden} message={errorMessage} positive={false} negative={true} />
              </div>
              <form onSubmit={handleSubmit} autoComplete="off">
                <Grid.Row>
                  <ControlledInput className="register__container__column__input" label='E-mail' name="email" type="email" placeholder="Email" />
                </Grid.Row>
                <Grid.Row>
                  <ControlledInput className="register__container__column__input" label='Pseudo' name="username" type="text" placeholder="Pseudo" />
                </Grid.Row>
                <Grid.Row>
                  <div className='city-autocomplete'>
                    <Label
                      className='city-label'
                      content='Ville'
                    />
                    <Dropdown
                      className='city-dropdown'
                      scrolling
                      clearable
                      search
                      selection
                      closeOnBlur
                      options={suggestedCity}
                      placeholder='Chercher...'
                      onSearchChange={handleChangeCity}
                      onChange={handleSelectCity}
                    />
                  </div>
                </Grid.Row>
                <Grid.Row>
                  <Popup
                    content="Le mot de passe doit doit être compris entre 8 et 20 caractères, contenir une majuscule, une minuscule et un caractère spécial"
                    trigger={
                      <ControlledInput
                        className="register__container__column__input"
                        label='Mot de passe'
                        name="password"
                        type="password"
                        placeholder="Mot de passe"
                      />}
                  />
                </Grid.Row>
                <Grid.Row>
                  <ControlledInput
                    className="register__container__column__input"
                    label='Répéter' name="passwordConfirm"
                    type="password"
                    placeholder="Mot de passe"
                  />
                </Grid.Row>
                <Checkbox className="home__container__column__checkbox" toggle checked={checked} label="J'accepte les conditions générales d'utilisation" onClick={handleToggle} />
                <Grid.Row>
                  <Button
                    className="register__container__column__button"
                    color="orange"
                    size="big"
                    type="submit"
                    loading={isLoading}
                    icon
                    labelPosition='right'
                  >
                    S'enregistrer
                    <Icon name='save' />
                  </Button>
                </Grid.Row>
              </form>
            <Button
              className="register__container__column__button"
              as={Link}
              to="/"
              color="orange"
              size="big"
              type="button"
              loading={isLoading}
              icon
              labelPosition='right'
            >
              Retour à l'accueil
              <Icon name='reply' />
            </Button>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
};
