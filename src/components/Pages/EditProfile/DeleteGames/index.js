import PropTypes from 'prop-types';
import CardGroup from '../../../CardGroupDeleteGames';
import './styles.scss';

export default function DeleteGames({ games, handleDeleteGame }) {

  return (
      <CardGroup array={games} title={'Ma ludothèque'} handleDeleteGame={handleDeleteGame} />
  );
};

DeleteGames.propTypes = {
  games: PropTypes.array.isRequired,
  handleDeleteGame: PropTypes.func.isRequired,
};


