import { fetchAPI } from '../../../utils/fetchAPI';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { saveUserInfos } from '../../../actions/user';
import { subscribeEvent, unsubscribeEvent } from '../../../actions/event';
import moment from 'moment';
import 'moment/locale/fr';

import Map from '../../Map';
import ControlledInput from '../../ControlledInput';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import './styles.scss';
import {
  Header,
  Image,
  Segment,
  Card,
  Grid,
  Icon,
  Divider,
  Button,
  Container,
  Modal,
} from 'semantic-ui-react';

export default function DetailEvent() {
  const dispatch = useDispatch();

  const eventId = useParams().id;
  const loggedUser = JSON.parse(localStorage.getItem('userInfos'));
  const position = [loggedUser.user.lat, loggedUser.user.long];

  const userId = useSelector(state => state.user.id);
  const isSubscribed = useSelector(state => state.event.isSubscribed);

  const [isAdmin, setIsAdmin] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventPicture, setEventPicture] = useState('');
  const [eventAdmin, setEventAdmin] = useState('');
  const [eventAdminId, setEventAdminId] = useState(0);
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [seatsAvailable, setSeatsAvailable] = useState('');
  const [event, setEvent] = useState([]);

  const fetchEvent = async () => {
    const event = await fetchAPI(`events/${eventId}`);
    console.log(event)
    setEventTitle(event.event.name);
    setEventPicture(event.event.picture);
    setEventAdminId(event.event.event_admin.id);
    setEventAdmin(event.event.event_admin.username);
    setEventDescription(event.event.description);
    setEventDate(event.event.start_date);
    setSeatsAvailable(event.event.seats);
    setEventLocation(event.event.geo.city);
    setEvent([event.event]);
    console.log('userId =>', userId)
    console.log('eventadminId=>', eventAdminId)
    // console.log(eventDate)
    if (userId === eventAdminId) {
      setIsAdmin(true);
    }
  };

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('userInfos'));
    if (loggedUser) {
      dispatch(saveUserInfos(loggedUser.user));
    }
    fetchEvent();
  }, []);

  const [modalValidation, setmodalValidation] = useState(false);
  const [modalUnsubscribe, setmodalUnsubscribe] = useState(false);

  // const message = useSelector((state) => state.event.message);
  // const errorMessage = useSelector((state) => state.error.errorMessage);

  const handleSubscribeEvent = () => {
    dispatch(subscribeEvent(eventId));
  };

  const handleUnsubscribeEvent = () => {
    dispatch(unsubscribeEvent(eventId))
  }

  return (
    <>
      <Navbar />
      <Header textAlign="center" as="h1">
        {eventTitle}
      </Header>

      <Container textAlign="center">
        <Image
          className="eventdetail__img"
          alt="Event Image"
          centered
          rounded
          src={eventPicture}
          size="large"
        />
        <Button
          className="eventdetail__edit__avatar"
          as="label"
          htmlFor="file"
          type="button"
          icon
          circular
          title="edit avatar"
          color="orange"
          style={{ display: 'none' }}
        >
          <Icon name="edit" />
        </Button>
        <ControlledInput
          name="event-picture"
          type="file"
          id="file"
          style={{ display: 'none' }}
        />
      </Container>

      <Divider />

      <Segment className="eventdetail" size="huge">
        <Grid columns={2} relaxed="very" divided stackable>
          <Grid.Row>
            <Grid.Column>
              <Map
                className={'map__container--large'}
                position={position}
                eventsList={event}
              />
            </Grid.Column>

            <Grid.Column stretched={true}>
              <Grid.Row>
                <Card.Description>
                  <Icon color="orange" name="chess queen" />
                  Organisateur : {eventAdmin}
                </Card.Description>
              </Grid.Row>
              <Grid.Row>
                <Card.Description>
                  <Icon color="orange" name="clock outline" />
                  {moment({ eventDate }).format('Do MMMM YYYY, LT')}
                </Card.Description>
              </Grid.Row>
              <Grid.Row>
                <Card.Description>
                  <Icon color="orange" name="map marker alternate" />
                  {eventLocation}
                </Card.Description>
              </Grid.Row>
              <Grid.Row>
                <Card.Description>
                  <Icon color="orange" name="users" />
                  {seatsAvailable} places disponibles
                </Card.Description>
              </Grid.Row>
              <Grid.Row>
                <Card.Description>
                  <Icon color="orange" name="talk" />
                  {eventDescription}
                </Card.Description>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {isSubscribed ? (
        <Modal
          closeIcon
          onClose={() => setmodalUnsubscribe(false)}
          onOpen={() => setmodalUnsubscribe(true)}
          open={modalUnsubscribe}
          trigger={
            <Button
              onClick={handleUnsubscribeEvent}
              className="eventdetail__button"
              fluid
              color="red"
              animated
            >
              <Button.Content visible>Se désinscrire de l'événement</Button.Content>
              <Button.Content hidden>
                <Icon name="calendar plus" />
              </Button.Content>
            </Button>
          }
        >
          <Header icon="chess" content="Désinscription validée" />
          <Modal.Content>
            <p>
              Votre participation vient d'être supprimée de votre{' '}
              <Link to="/dashboard"> Menu principal ! </Link>
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={() => setmodalUnsubscribe(false)}>
              <Icon name="checkmark" /> Retour
            </Button>
          </Modal.Actions>
        </Modal>
      ) : (
        <Modal
          closeIcon
          onClose={() => setmodalValidation(false)}
          onOpen={() => setmodalValidation(true)}
          open={modalValidation}
          trigger={
            <Button
              onClick={handleSubscribeEvent}
              className="eventdetail__button"
              fluid
              color="orange"
              animated
            >
              <Button.Content visible>Participer à l'événement</Button.Content>
              <Button.Content hidden>
                <Icon name="calendar plus" />
              </Button.Content>
            </Button>
          }
        >
          <Header icon="chess" content="Participation validée" />
          <Modal.Content>
            <p>
              Votre participation vient d'être ajoutée à votre{' '}
              <Link to="/dashboard"> Menu principal! </Link>
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={() => setmodalValidation(false)}>
              <Icon name="checkmark" /> Retour
            </Button>
          </Modal.Actions>
        </Modal>

      )}

      <Divider />

      <Footer />
    </>
  );
}
