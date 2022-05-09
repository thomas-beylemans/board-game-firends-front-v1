import { Segment, Image, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import checkmate from '../../assets/img/checkmate.jpg';
import './styles.scss';

export default function Error() {

  return (
    <>
      <Image src={checkmate} className="error" centered size='big' />
      <Segment textAlign='center' color='orange' size='large'  >
        <Header icon>
          <Icon name='frown outline' />
          <p>Échec et mat !</p>
          <p>Retour à <Link to='/'>l'accueil</Link> ?</p>
        </Header>
      </Segment>
    </>
  );
}

