import { fetchAPI } from '../../../utils/fetchAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveUserInfos } from '../../../actions/user';
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
} from 'semantic-ui-react';


export default function DetailEvent() {
  const dispatch = useDispatch();

  const eventId = useParams().id;
  const loggedUser = JSON.parse(localStorage.getItem("userInfos"));
  const position = [loggedUser.user.lat, loggedUser.user.long];

  const [eventTitle, setEventTitle] = useState('');
  const [eventAdmin, setEventAdmin] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [seatsAvailable, setSeatsAvailable] = useState('');
  const [event, setEvent] = useState([]);


  const fetchEvent = async () => {
    const event = await fetchAPI(`events/${eventId}`);
    console.log(event);
    setEventTitle(event.events.event.name);
    setEventAdmin(event.events.event.event_admin.username);
    setEventDescription(event.events.event.description);
    setEventDate(event.events.event.start_date);
    setSeatsAvailable(event.events.event.seats);
    setEventLocation(event.events.event.geo.city);
    setEvent([event.events.event]);
  }

  useEffect (() => {
    const loggedUser = JSON.parse(localStorage.getItem("userInfos"));
    if (loggedUser) {
        dispatch(saveUserInfos(loggedUser.user));
    }
    fetchEvent();
  }, []);

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
          src="https://cdn.pixabay.com/photo/2020/02/26/05/45/cards-4880676_960_720.jpg"
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
                  {moment({eventDate}).format('Do MMMM YYYY, LT')}
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

      <Button className="eventdetail__button" fluid color="orange" animated>
        <Button.Content visible>Participer à l'événement</Button.Content>
        <Button.Content hidden>
          <Icon name="calendar plus" />
        </Button.Content>
      </Button>

      <Divider />

      <Footer />
    </>
  );
}
