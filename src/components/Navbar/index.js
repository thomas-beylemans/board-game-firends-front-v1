import { Menu, Button } from 'semantic-ui-react'

import './styles.scss';

export default function Navbar() {
    return (
        <div className="navbar">
            <Menu
                className="navbar__menu"
                vertical
                color={'orange'}
                inverted
                fitted='vertically'
            >
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
                    Luodothèque
                </Menu.Item>
                <Menu.Item>
                    <Button
                        icon='plus circle'
                        color='yellow'
                        content='Créer un événement'
                        labelPosition='left'
                    />  {/* // to replace with custom button component */}
                </Menu.Item>
                <Menu.Item
                    link
                    name='faq'
                    active={false}   // isActive will be determined by React Router
                >
                    F.A.Q
                </Menu.Item>
                <Menu.Item
                    link
                    name='cgu'
                    active={false}   // isActive will be determined by React Router
                >
                    Conditions d'utilisation
                </Menu.Item>
                <Menu.Item
                    link
                    name='team'
                    active={false}   // isActive will be determined by React Router
                >
                    Contact
                </Menu.Item>
            </Menu>
        </div>
    );
}