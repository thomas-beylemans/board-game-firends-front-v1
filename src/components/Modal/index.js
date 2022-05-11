import React from 'react';
import './styles.scss';
import {
  Button,
  Image,
  Modal,
  TextArea,
  Grid,
  Segment,
} from 'semantic-ui-react';
import ControlledInput from '../ControlledInput';

export default function ModalEvent() {
  const [firstModalCreateEvent, setfirstModalCreateEvent] =
    React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log('je viens de Submit');
  // };

  return (
    <div>
      <Modal
        onClose={() => setfirstModalCreateEvent(false)}
        onOpen={() => setfirstModalCreateEvent(true)}
        open={firstModalCreateEvent}
        trigger={<Button circular icon="plus circle" inverted color="yellow" />}
      >
        {/* <form onSubmit={handleSubmit} autoComplete="off"> */}
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
                          className="home__container__column__input"
                          label="Nom de l'événement"
                          name="email"
                          type="email"
                          placeholder="Nom de l'événement"
                        />
                      </Grid.Row>

                      <Grid.Row>
                        <ControlledInput
                          className="home__container__column__input"
                          label="Ville"
                          name="city"
                          type="text"
                          min="0"
                          placeholder="Ville"
                        />
                      </Grid.Row>
                      <Grid.Row>
                        <ControlledInput
                          className="home__container__column__input"
                          label="Code Postal"
                          name="postcode"
                          type="number"
                          min="0"
                          placeholder="Code Postal"
                        />
                      </Grid.Row>
                      <Grid.Row>
                        <ControlledInput
                          className="home__container__column__input"
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
                      placeholder="Decriptions"
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
          <Modal.Content>
            <p>A propos de mon évènement</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              icon="check"
              content="All Done"
              onClick={() => setfirstModalCreateEvent(false)}
            />
          </Modal.Actions>
        </Modal>
      </Modal>
    </div>
  );
}
