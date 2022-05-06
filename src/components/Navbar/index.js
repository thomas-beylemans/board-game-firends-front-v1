import { Menu, Button } from 'semantic-ui-react'

import './styles.scss';

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
                    <img alt="small-logo" src='' />
                </Menu.Item>
                <Menu.Item
                    link
                    name='dashboard'
                    active={true}   // isActive will be determined by React Router
                >
                    Tableau de bord
                </Menu.Item>
                <Menu.Item
                    link
                    name='events'
                    active={false}   // isActive will be determined by React Router
                >
                    Evénements
                </Menu.Item>
                <Menu.Item
                    link
                    name='my-games'
                    active={false}   // isActive will be determined by React Router
                >
                    Ludothèque
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