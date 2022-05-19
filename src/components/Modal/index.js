import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Button, Image, Modal, TextArea, Grid, Form, Input } from 'semantic-ui-react';
import EventInput from '../EventInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeEventValue, createEvent } from '../../actions/event';
import { saveCity } from '../../actions/event';
import { findCity } from '../../utils/findCity';

import './styles.scss';
import game from '../../middlewares/game';

export default function ModalEvent() {

  const dispatch = useDispatch();

  const [firstModalCreateEvent, setfirstModalCreateEvent] = useState(false);
  const [secondModalCreateEvent, setSecondModalCreateEvent] = useState(false);
  const [suggestedCity, setSuggestedCity] = useState([]);
  const [city, setCity] = useState('');
  const [gameArray, setGameArray] = useState([]);
  const [gameName, setGameName] = useState('');

  const postcode = useSelector(state => state.event.postcode);


  const handleChangeCity = (e) => {
    axios.get(`https://geo.api.gouv.fr/communes?nom=${e.target.value}&boost=population&fields=code,nom,centre,departement,codesPostaux`)
      .then(res => {
        setSuggestedCity(res.data);
      })
    setCity(e.target.value);
  };


  const handleChangeGame = async (e) => {
    setGameName(e.target.value);
    const response = await axios.get(`https://api.boardgameatlas.com/api/search?name=${e.target.value}&pretty=true&client_id=GlJMJ8GUHb`);
    const gamesList = response.data.games;
    setGameArray(gamesList);    
  };

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    dispatch(saveCity(findCity(suggestedCity, city, postcode)));
    dispatch(createEvent());
  };

  const message = useSelector(state => state.event.message);
  const errorMessage = useSelector(state => state.error.errorMessage);

  return (
    <div>
      <Modal
        as={Form}
        onSubmit={handleSubmitCreate}
        onClose={() => setfirstModalCreateEvent(false)}
        onOpen={() => setfirstModalCreateEvent(true)}
        open={firstModalCreateEvent}
        trigger={<Button circular icon="plus circle" inverted color="yellow" />}
      >
        <Modal.Header>A propos de mon événement..</Modal.Header>
        <Modal.Content image>
          <Grid columns={2} divided stackable>
            <Grid.Row>
              <Grid.Column>
                <Image
                  className="modal__img"
                  fluid
                  rounded
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />
              </Grid.Column>
              <Grid.Column>
                <Grid.Row>
                  <Modal.Description>
                    <Grid.Row>
                      <EventInput
                        className="modal__input"
                        label="Nom de l'événement"
                        name="name"
                        type="text"
                        placeholder="Nom de l'événement"
                      />
                    </Grid.Row>
                    <Grid.Row>
                      <Input className="modal__input" label='Ville' name="city" type="text" placeholder="Ville" list="cities" onChange={handleChangeCity} value={city} />
                      <datalist id="cities">
                        {
                          suggestedCity.map(city => (
                            <option key={city.code} value={city.nom.normalize("NFD").replace(/[\u0300-\u036f]/g, "")} />
                          ))
                        }
                      </datalist>
                    </Grid.Row>
                    <Grid.Row>
                      <EventInput
                        className="modal__input"
                        label="Code Postal"
                        name="postcode"
                        type="text"
                        min="0"
                        placeholder="Code Postal"
                      />
                    </Grid.Row>
                    <Grid.Row>
                      <EventInput
                        className="modal__input"
                        label="Nombre de joueurs"
                        name="seats"
                        type="number"
                        min="0"
                        placeholder="Nombre de joueurs "
                      />
                    </Grid.Row>
                    <Grid.Row>
                      <EventInput
                        className="modal__img__input"
                        label="Date et heure"
                        name="start_date"
                        placeholder="Date et heure"
                        type="datetime-local"
                      />
                    </Grid.Row>
                    <Grid.Row>
                      <Input className="modal__input" label='Jeu' name="game" type="text" placeholder="Jeu" list="games" onChange={handleChangeGame} value={gameName} />
                      <datalist id="games">
                        {
                          gameArray.map(game => (
                            <option key={game.id} value={game.name} />
                          ))
                        }
                      </datalist>
                    </Grid.Row>
                    <TextArea
                      className="textarea"
                      rows={5}
                      style={{ minWidth: 300 }}
                      placeholder="Description"
                      maxLength="1000"
                      name="description"
                      onChange={(e) => { dispatch(changeEventValue('description', e.target.value)); }}
                    ></TextArea>
                  </Modal.Description>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>

        <Modal.Actions>
          <Button color="black" onClick={() => setfirstModalCreateEvent(false)}>
            Retour
          </Button>
          <Button
            type="submit"
            content="Créer mon événement !"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setSecondModalCreateEvent(true)}
            positive
          />
        </Modal.Actions>

        <Modal
          onClose={() => setSecondModalCreateEvent(false)}
          open={secondModalCreateEvent}
          size="small"
        >
          <Modal.Header>{errorMessage ? errorMessage : message}</Modal.Header>

          <Modal.Actions>
            <Button
              icon="check"
              content="Valider"
              positive
              onClick={() => {
                setfirstModalCreateEvent(false);
                setSecondModalCreateEvent(false);
              }}
            />
          </Modal.Actions>
        </Modal>
      </Modal>
    </div>
  );
}
