import { Image, Header, Grid, Container } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './styles.scss';

import games_img from '../../../../assets/img/games.jpg';

export default function ProfileInfos({ username, city, avatar, bio }) {

  if (avatar === null) {
    avatar = games_img
  }

  return (
    <Grid className="profile-infos" columns={2} divided padded stackable >
      <Grid.Row>
        <Grid.Column >
          <Container className='infos' textAlign='center'>
            <Image src={avatar} size='small' circular centered />
            <Header as='h1'>{username}</Header>
            <Header as='h3'>{city}</Header>
          </Container>
        </Grid.Column>
        <Grid.Column className="description">        
          <Header as='h2'>Quelques mots sur moi</Header>
          <p>{bio}</p>        
      </Grid.Column>
    </Grid.Row>
    </Grid >
  );
}

