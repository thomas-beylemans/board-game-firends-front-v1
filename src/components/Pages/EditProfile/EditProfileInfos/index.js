import { Image, Header, Grid, Container, Button, TextArea, Form, Icon } from 'semantic-ui-react'
import ControlledInput from '../../../ControlledInput';
import { useSelector } from 'react-redux';
import './styles.scss';

import games_img from '../../../../assets/img/games.jpg';

export default function EditProfileInfos(onClick) {
    const username = useSelector(state => state.user.username)
    const city = useSelector(state => state.user.city)
    const email = useSelector(state => state.user.email)    
    const bio = useSelector(state => state.user.bio)    

    return (
        <Form className="form__flex">
            <div>
                <Grid className="profile-infos" columns={2} divided padded stackable >
                    <Grid.Row>
                        <Grid.Column >
                            <Container className="infos" textAlign='center'>
                                <Image src={games_img} size='small' circular centered />
                                {/* Ici, le bouton délenche le input type file qui est dessous et qui est caché */}
                                <Button as="label" htmlFor="file" type="button" icon circular title='edit avatar' color='orange'>
                                    <Icon name='edit' />
                                </Button>
                                <input type="file" id="file" style={{ display: "none" }} />
                                <ControlledInput value={username} label='Pseudo' name='username' className="infos__input" />
                                <ControlledInput value={city} label='Ville' name='city' className="infos__input" />
                            </Container>
                        </Grid.Column>
                        <Grid.Column className="description">
                            <Header as='h2'>Quelques mots sur moi</Header>
                            <TextArea rows={8} value={bio}>
                            </TextArea>
                            <ControlledInput value={email} label='Email' name='email' className="infos__input" />
                            <ControlledInput label='Mot-de-passe' name='password' className="infos__input" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            <div>
                <Button.Group className='save-btn-group'>
                    <Button onClick={onClick} color="orange" size='large'>
                        Sauvegarder
                    </Button>
                    <Button onClick={onClick} basic color="orange" size='large'>
                        Supprimer le compte
                    </Button>
                </Button.Group>
            </div>
        </Form>
    );
}

