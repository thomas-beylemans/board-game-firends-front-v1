import './styles.scss';
import { Segment, Header, Button, Form, Input } from 'semantic-ui-react'
import ControlledInput from '../../../ControlledInput';

export default function AddGame() {

const handleClickAdd = () => {
console.log('J\'enregistre mon nouveau jeu')
}

    return (
        <div>
            <Segment className='add-game' color='orange' padded>
                <Header as='h2' color='orange'>Ajouter un jeu à ma ludothèque</Header>
                <Form className='add-game-btn'>
                    <ControlledInput label='Nom' name='game-name' className='add-game__input'/>
                    <Input className='add-game__input' label='Image' type='file'/>
                    <Button onClick={handleClickAdd} color='orange' size='large'>
                        Enregistrer
                    </Button>
                </Form>
            </Segment>
        </div>
    );
};
