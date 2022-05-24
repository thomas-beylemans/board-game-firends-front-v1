import { fetchAPI } from '../../../utils/fetchAPI';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { saveUserInfos } from '../../../actions/user';
import { saveEventDetails, subscribeEvent, unsubscribeEvent } from '../../../actions/event';
import moment from 'moment-timezone';
import 'moment/locale/fr';

import Map from '../../Map';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Alert from '../../Alert';
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
  const navigate = useNavigate();

  const eventId = useParams().id;
  const loggedUser = JSON.parse(localStorage.getItem('userInfos'));
  const position = [loggedUser.user.lat, loggedUser.user.long];

  const userId = useSelector((state) => state.user.id);

  const eventTitle = useSelector(state => state.eventDetails.title);
  const eventPicture = useSelector(state => state.eventDetails.picture);
  const eventDescription = useSelector(state => state.eventDetails.description);
  const eventLocation = useSelector(state => state.eventDetails.location.city);
  const eventDate = useSelector(state => state.eventDetails.start_date);
  const seatsAvailable = useSelector(state => state.eventDetails.seats_available);
  const eventAdmin = useSelector(state => state.eventDetails.eventAdmin.username);
  const eventAdminId = useSelector(state => state.eventDetails.eventAdmin.id);
  const eventPlayers = useSelector(state => state.eventDetails.eventPlayer);
  const successMessage = useSelector((state) => state.error.successMessage);

  const isAdmin = userId === eventAdminId;
  const isSubscribed = eventPlayers.find((player) => player.id === userId);

  const [isHidden, setIsHidden] = useState(true);
  const [event, setEvent] = useState([]);
  const [eventAction, setEventAction] = useState(false);

  const fetchEvent = async () => {
    const event = await fetchAPI(`events/${eventId}`);
    if (event === 'Aucun événement ne correspond à la recherche !') {
      return navigate('/error');
    }
    setEvent([event.event]);
    dispatch(saveEventDetails(event.event));
  };

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('userInfos'));
    if (loggedUser) {
      dispatch(saveUserInfos(loggedUser.user));
    }
    fetchEvent();
  }, [eventAction]);

  const handleSubscribeEvent = () => {
    setEventAction(!eventAction);
    dispatch(subscribeEvent(eventId));
    setIsHidden(false);
    fetchEvent();
    setTimeout(() => {
      setIsHidden(true);
    }, 2000);
  };

  const handleUnsubscribeEvent = () => {
    setEventAction(!eventAction);
    dispatch(unsubscribeEvent(eventId));
    setIsHidden(false);
    fetchEvent();
    setTimeout(() => {
      setIsHidden(true);
    }, 2000);
  };

  return (
    <div>
    <Navbar />
    <div className='detailEvent'>
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
                  Organisateur : {<Link className='link-profile' to={`/profile/${eventAdminId}`}>{eventAdmin}</Link>}
                </Card.Description>
              </Grid.Row>
              <Grid.Row>
                <Card.Description>
                  <Icon color="orange" name="clock outline" />
                  { moment(eventDate).tz('Africa/Dakar').format('dddd DD MMMM YYYY, LT')}
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
                  {seatsAvailable > 1 && `${seatsAvailable} places disponibles`}
                  {seatsAvailable <= 1 && `${seatsAvailable} place disponible`}
                </Card.Description>
              </Grid.Row>

              {eventPlayers.length !== 0 &&
                <div>
                  <Grid.Row>
                    <Card.Description children={eventPlayers}><Icon color="orange" name="users" />
                      Participants: {eventPlayers.map(player => (
                        <span key={player.id}> - <Link className='link-profile' to={`/profile/${player.id}`}>{player.username}</Link></span>
                      ))}
                    </Card.Description>
                  </Grid.Row>
                </div>}

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
      {!isAdmin && (
        <div>
          {isSubscribed !== undefined ? (
            <>
              <div className="eventdetail__alert">
                <Alert
                  hidden={isHidden}
                  message={successMessage}
                  positive={true}
                  negative={false}
                />
              </div>
              <Button
                onClick={handleUnsubscribeEvent}
                className="eventdetail__button"
                fluid
                color="red"
              >
                <Button.Content visible>Se désinscrire</Button.Content>
              </Button>
            </>
          ) : (
            <>
              <div className="eventdetail__alert">
                <Alert
                  hidden={isHidden}
                  message={successMessage}
                  positive={false}
                  negative={true}
                />
              </div>
              <Button
                onClick={handleSubscribeEvent}
                className="eventdetail__button"
                fluid
                color="orange"
              >
                <Button.Content visible>S'inscrire</Button.Content>
              </Button>
            </>
          )}
        </div>
      )}
      <Divider />
      </div>
      <Footer />
    </div>
  );
}
