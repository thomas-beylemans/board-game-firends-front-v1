import { Grid, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import checkmate from '../../assets/img/checkmate.jpg';
import './styles.scss';

export default function Error() {

  return (
    <div className='error'>
      <Grid verticalAlign='middle' centered column={2}>
      <Grid.Row>
      <Grid.Column width={8}>
        <Image src={checkmate} className='error-img' />
      </Grid.Column>
      <Grid.Column  width={8}>
        <Header className='error-message'as='h1'>Échec et mat ! <br /> Retour à <Link className='error-message-link' to='/'>l'accueil</Link> ?</Header>
      </Grid.Column>      
    </Grid.Row>
      </Grid>
    </div>
  );
}

