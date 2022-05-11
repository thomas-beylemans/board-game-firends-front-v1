import React from 'react';
import './styles.scss';
import {
  Button,
  Image,
  Modal,
  TextArea,
  Grid,
} from 'semantic-ui-react';
import ControlledInput from '../ControlledInput';

export default function ModalEvent() {
  const [firstModalCreateEvent, setfirstModalCreateEvent] =
    React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);

  return (
    <div>
      <Modal
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
                      maxlength="1000"
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
            content="Créer mon événement !"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setSecondOpen(true)}
            positive
          />
        </Modal.Actions>
        {/* </form> */}

        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size="small"
        >
          <Modal.Header>Évènement créé !</Modal.Header>

          <Modal.Actions>
            <Button
              icon="check"
              content="C'est fait !"
              onClick={() => setfirstModalCreateEvent(false)}
            />
          </Modal.Actions>
        </Modal>
      </Modal>
    </div>
  );
}
