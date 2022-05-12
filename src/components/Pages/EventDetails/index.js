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

// user position defined in the user profile - fetched from the database
const position = [43.6107, 3.8767];
// events list fetched from the database - represented as an array of coordinates for last recent events
const eventsList = [[43.5107, 3.8767]];

export default function DetailEvent() {
  return (
    <>
      <Navbar />
      <Header textAlign="center" as="h1">
        Titre de l'événement
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
        >
          <Icon name="edit" />
        </Button>
        <ControlledInput
          className=""
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
                eventsList={eventsList}
              />
            </Grid.Column>

            <Grid.Column stretched={true}>
              <Grid.Row>
                <Card.Description>
                  <Icon color="orange" name="chess queen" />
                  Organisé par ..
                </Card.Description>
              </Grid.Row>
              <Grid.Row>
                <Card.Description>
                  <Icon color="orange" name="clock outline" />
                  Date et heure
                </Card.Description>
              </Grid.Row>
              <Grid.Row>
                <Card.Description>
                  <Icon color="orange" name="map marker alternate" />
                  Lieu
                </Card.Description>
              </Grid.Row>
              <Grid.Row>
                <Card.Description>
                  <Icon color="orange" name="users" />
                  Limite de joueurs
                </Card.Description>
              </Grid.Row>
              <Grid.Row>
                <Card.Description>
                  <Icon color="orange" name="talk" />
                  Descriptions
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
