import React from 'react';
import './styles.scss';
import { Button, Image, Modal, TextArea, Grid } from 'semantic-ui-react';
import EventInput from '../EventInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeEventValue, createEvent } from '../../actions/event';

export default function ModalEvent() {

  const dispatch = useDispatch();

  const [firstModalCreateEvent, setfirstModalCreateEvent] =
    React.useState(false);
  const [secondModalCreateEvent, setSecondModalCreateEvent] =
    React.useState(false);

    const name = useSelector((state) => state.event.name);
    const city = useSelector((state) => state.event.city);
    const postcode = Number(useSelector((state) => state.event.postcode));
    const seats = Number(useSelector((state) => state.event.seats));
    const start_date = useSelector((state) => state.event.start_date);
    // const picture = useSelector((state) => state.event.img);
    const description = useSelector((state) => state.event.description);
    // const lat = useSelector((state) => state.event.lat);
    // const long = useSelector((state) => state.event.long);

    const picture = "google.fr";
    const lat = 32.12345;
    const long = -123.12345;

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    const event = {event: {name, picture, seats, start_date, description, geo: {city, postcode, lat, long}}}
    dispatch(createEvent(event));
    };

  return (
    <div>
      <Modal
        onClose={() => setfirstModalCreateEvent(false)}
        onOpen={() => setfirstModalCreateEvent(true)}
        open={firstModalCreateEvent}
        trigger={<Button circular icon="plus circle" inverted color="yellow" />}
      >
        <Modal.Header>A propos de mon événement..</Modal.Header>
        <form onSubmit={handleSubmitCreate}>
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
                      </>

                      <TextArea
                        className="textarea"
                        rows={5}
                        style={{ minWidth: 300 }}
                        placeholder="Description"
                        maxLength="1000"
                        name="description"
                        onChange={(e) => {dispatch(changeEventValue('description', e.target.value));}}
                      ></TextArea>
                    </Modal.Description>
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>

          <Modal.Actions>
            <Button
              color="black"
              onClick={() => setfirstModalCreateEvent(false)}
            >
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
        </form>

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
