import { Image, Header, Grid, Container, Button, Icon } from 'semantic-ui-react'
import './styles.scss';

import games_img from '../../../../assets/img/games.jpg';

export default function ProfileInfos() {


    return (
        <Grid className="profile-infos" columns={2} divided padded stackable >
            <Grid.Row>
                <Grid.Column >                    
                    <Container className='infos' textAlign='center'>                    
                        <Image src={games_img} size='small' circular centered />
                        <Header as='h1'>Pseudo</Header>
                        <Header as='h3'>Ville</Header>
                    </Container>
                </Grid.Column>
                <Grid.Column className="description" >
                <Button animated='fade' size='tiny' color='orange' floated='right'>
                        <Button.Content hidden>Edit</Button.Content>
                        <Button.Content visible>
                            <Icon name='edit' />
                        </Button.Content>
                    </Button>
                    <Header as='h2'>Quelques mots sur moi</Header>
                    <p>Vivamus in posuere velit. Donec eu mi enim. Fusce ut nisi rhoncus, egestas magna quis, commodo nisl. Integer blandit ipsum sed ante porttitor egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tempor fringilla nisi sed ornare. Vestibulum ac ante dapibus, bibendum sem ac, sollicitudin odio. Sed a ornare ex.
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

