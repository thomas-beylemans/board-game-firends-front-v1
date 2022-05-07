import './styles.scss';
import { Segment, Header, Button } from 'semantic-ui-react'
import ControlledInput from '../../../ControlledInput';

export default function AddGame(onClick) {
    return (
        <div>
            <Segment className="add-game" color='orange' padded>
                <Header as='h2' color='orange'>Ajouter un jeu à ma ludothèque</Header>
                <div className='add-game-btn'>
                    <ControlledInput label='Nom' name='game-name' />
                    <ControlledInput label='Image' type='file' name='game-pic' />
                    <Button onClick={onClick} color="orange" size='large'>
                        Enregistrer
                    </Button>
                </div>
            </Segment>
        </div>
    );
};