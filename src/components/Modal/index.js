import React from 'react';
import { Button, Image, Modal, TextArea, Grid, Form } from 'semantic-ui-react';
import EventInput from '../EventInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeEventValue, createEvent } from '../../actions/event';
import { useState } from 'react';

import './styles.scss';

export default function ModalEvent() {

  const dispatch = useDispatch();

  const [firstModalCreateEvent, setfirstModalCreateEvent] = useState(false);
  const [secondModalCreateEvent, setSecondModalCreateEvent] = useState(false);

  const handleSubmitCreate = (e) => {
    e.preventDefault();
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
                        <EventInput
                          className="modal__input"
                          label="Ville"
                          name="city"
                          type="text"
                          min="0"
                          placeholder="Ville"
                        />
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
                        <EventInput
                          className="modal__img__input"
                          name="picture"
                          label="Image"
                          type="file"
                          id="file"
                        />
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
