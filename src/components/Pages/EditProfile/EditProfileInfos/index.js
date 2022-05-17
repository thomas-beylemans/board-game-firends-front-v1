import axios from 'axios';
import { Image, Header, Grid, Container, Button, TextArea, Form, Icon } from 'semantic-ui-react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ControlledInput from '../../../ControlledInput';
import { findCity } from '../../../../utils/findCity';
import { saveCity, editUserInfos, saveBio, saveAvatar } from '../../../../actions/user';
import './styles.scss';

import games_img from '../../../../assets/img/games.jpg';

export default function EditProfileInfos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [suggestedCity, setSuggestedCity] = useState([]);
  const [newCity, setNewCity] = useState('');

  const username = useSelector(state => state.user.username)
  const postcode = useSelector(state => state.user.postcode)
  const city = useSelector(state => state.user.city)
  const email = useSelector(state => state.user.email)
  const bio = useSelector(state => state.user.bio)
  const avatar = useSelector(state => state.user.avatar);


  const handleChangeCity = (e) => {
    axios.get(`https://geo.api.gouv.fr/communes?nom=${e.target.value}&boost=population&fields=code,nom,centre,departement,codesPostaux`)
      .then(res => {
        setSuggestedCity(res.data);
      })
    setNewCity(e.target.value);
  };

  const handleTextarea = (event) => {
    dispatch(saveBio(event.target.value))
  }

  const handleAvatar = (event) => {
    dispatch(saveAvatar(event.target.value))    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveCity(findCity(suggestedCity, newCity, postcode)));
    dispatch(editUserInfos())// to dispatch the action to trigger the api patch   
    navigate('/profile')
  }

  const handleClickDelete = () => {
    console.log('Je supprime mon compte')
  }

  return (
    <Form onSubmit={handleSubmit} className="form__flex">
      <div>
        <Grid className="profile-infos" columns={2} divided padded stackable >
          <Grid.Row columns={2}>
            <Grid.Column>
              <Container className="infos" textAlign='center'>
                {avatar && <Image src={avatar} size='small' circular centered />}
                {avatar === null && <Image src={games_img} size='small' circular centered />}
                {/* Ici, le bouton délenche le input type file qui est dessous et qui est caché */}
                <Button as="label" htmlFor="file" type="button" icon circular title='Modifier mon avatar' color='orange'>
                  <Icon name='edit' />
                </Button>
                <input type="file" id="file" onChange={handleAvatar} style={{ display: "none" }} />
                <Grid.Row>
                  <ControlledInput value={username} label='Pseudo' name='username' className="infos__input" />
                </Grid.Row>
                <Grid.Row>
                  <ControlledInput defaultValue={city} label='Ville' name='city' className="infos__input" onChange={handleChangeCity} list="cities" />
                  <datalist id="cities">
                    {
                      suggestedCity.map(city => (
                        <option key={city.code} value={city.nom.normalize("NFD").replace(/[\u0300-\u036f]/g, "")} />
                      ))
                    }
                  </datalist>
                  <Grid.Row>
                    <ControlledInput value={postcode} label='Code postal' name='postcode' className="infos__input" />
                  </Grid.Row>
                </Grid.Row>
              </Container>
            </Grid.Column>
            <Grid.Column className="description">
              <div className='description-padded'>
                <Header as='h2'>Quelques mots sur moi</Header>
                <TextArea rows={8} value={bio === null ? '' : bio} placeholder='Merci de renseigner une description' onChange={handleTextarea}>
                </TextArea>
              </div>
              <Grid.Row className="description__row">
                <ControlledInput value={email} label='Email' name='email' className="description__input" />
              </Grid.Row>
              <Grid.Row className="description__row">
                <ControlledInput type='password' label='Mot de passe' name='password' className="description__input" />
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div>
        <Button.Group className='save-btn-group' widths={3}>
          <Button as={Link} to='/profile' basic color="yellow" size='large'>
            Annuler
          </Button>
          <Button type="submit" color="orange" size='large'>
            Sauvegarder
          </Button>
          <Button onClick={handleClickDelete} basic color="red" size='large' disabled>
            Supprimer le compte
          </Button>
        </Button.Group>
      </div>
    </Form >
  );
}

