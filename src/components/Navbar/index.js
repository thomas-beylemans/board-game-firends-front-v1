import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react'

import './styles.scss';
import logo_small from '../../../src/assets/img/logo_small.png';

export default function Navbar() {

    return (
        <Menu
            className="navbar__menu"
            color={'orange'}
            inverted
            stackable
        >
            <Menu.Menu position='left'>

                <Menu.Item>
                    <img alt="small-logo" src={logo_small} />
                </Menu.Item>
                <Menu.Item
                    as={NavLink}
                    name='dashboard'
                    to={'/dashboard'}
                >
                    Tableau de bord
                </Menu.Item>
                <Menu.Item
                    as={NavLink}
                    name='events'
                    to={'/events'}
                >
                    Evénements
                </Menu.Item>
                <Menu.Item
                    as={NavLink}
                    name='my-games'
                    to={'/team'}
                >
                    Luodothèque
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Button
                        circular
                        icon='plus circle'
                        color='yellow'
                    />
                </Menu.Item>
                <Menu.Item>
                    <Button
                        circular
                        icon='user'
                        color='yellow'
                    />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}