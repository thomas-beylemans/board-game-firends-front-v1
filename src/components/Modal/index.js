import React from 'react';
import './styles.scss';
import { Button, Image, Modal, TextArea, Grid, Form } from 'semantic-ui-react';
import ControlledInput from '../ControlledInput';

export default function ModalEvent() {
  const [firstModalCreateEvent, setfirstModalCreateEvent] =
    React.useState(false);
  const [secondModalCreateEvent, setSecondModalCreateEvent] =
    React.useState(false);

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    console.log('je soumets mon formulaire');
  };

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
                    <>
                      <Grid.Row>
                        <ControlledInput
                          className="modal__input"
                          label="Nom de l'événement"
                          name="email"
                          type="email"
                          placeholder="Nom de l'événement"
                        />
                      </Grid.Row>

                      <Grid.Row>
                        <ControlledInput
                          className="modal__input"
                          label="Ville"
                          name="city"
                          type="text"
                          min="0"
                          placeholder="Ville"
                        />
                      </Grid.Row>
                      <Grid.Row>
                        <ControlledInput
                          className="modal__input"
                          label="Code Postal"
                          name="postcode"
                          type="text"
                          min="0"
                          placeholder="Code Postal"
                        />
                      </Grid.Row>
                      <Grid.Row>
                        <ControlledInput
                          className="modal__input"
                          label="Nombre de joueurs"
                          name="players"
                          type="number"
                          min="0"
                          placeholder="Nombre de joueurs "
                        />
                      </Grid.Row>
                      <Grid.Row>
                        <ControlledInput
                          className="modal__img__input"
                          label="Date et heure"
                          name="meeting-time"
                          placeholder="Date et heure"
                          type="datetime-local"
                        />
                      </Grid.Row>
                      <Grid.Row>
                        <ControlledInput
                          className="modal__img__input"
                          name="img"
                          label="Image"
                          type="file"
                          id="file"
                        />
                      </Grid.Row>
                    </>

                    <TextArea
                      className="textarea"
                      rows={5}
                      style={{ minWidth: 300 }}
                      placeholder="Description"
                      maxLength="1000"
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
          <Modal.Header>Évènement créé !</Modal.Header>

          <Modal.Actions>
            <Button
              icon="check"
              content="C'est fait !"
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
