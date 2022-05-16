import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Card, Segment, Header, Image, Button, Icon } from 'semantic-ui-react';
import { deleteGame } from '../../../../actions/game';
import { fetchAPI } from '../../../../utils/fetchAPI';
import './styles.scss';

export default function DeleteGames({ title }) {
  const dispatch = useDispatch();

  const [myGames, setMyGames] = useState([]);

  const handleClick = (e) => {
    dispatch(deleteGame(e.target.value));
  }

  const fetchUserInfos = async () => {
    const userInfos = await fetchAPI('dashboard');
    setMyGames(userInfos.user.game);
  }
  useEffect(() => {
    fetchUserInfos();
  }, [myGames]);

  return (
    <Segment className='games-segment' color='orange' padded>
      <Header as='h1' color='orange'>{title}</Header>
      <Card.Group centered children={myGames}>
        {myGames.map(game => (
          <Card key={game.id}>
            <Image src={game.picture} />
            <Card.Content>
              <Card.Header>{game.name}</Card.Header>
            </Card.Content>
            <Button color='red' onClick={handleClick} value={game.id} icon>
              <Icon name='trash alternate' />
            </Button>
          </Card>
        ))}
      </Card.Group>
    </Segment>
  );
};

DeleteGames.propTypes = {
  title: PropTypes.string.isRequired,
};


