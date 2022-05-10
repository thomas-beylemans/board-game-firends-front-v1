import './styles.scss';
import { Segment, Header, Button } from 'semantic-ui-react'
import ControlledInput from '../../../ControlledInput';

export default function AddGame() {

const handleClickAdd = () => {
console.log('J\'enregistre mon nouveau jeu')
}

    return (
        <div>
            <Segment className="add-game" color='orange' padded>
                <Header as='h2' color='orange'>Ajouter un jeu à ma ludothèque</Header>
                <div className='add-game-btn'>
                    <ControlledInput label='Nom' name='game-name' className="add-game__input"/>
                    <ControlledInput label='Image' type='file' name='game-pic' className="add-game__input" />
                    <Button onClick={handleClickAdd} color="orange" size='large'>
                        Enregistrer
                    </Button>
                </div>
            </Segment>
        </div>
    );
};
