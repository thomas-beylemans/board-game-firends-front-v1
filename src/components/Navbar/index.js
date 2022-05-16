import { NavLink } from 'react-router-dom';
import { Menu, Button, Icon } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logOut } from '../../../src/actions/user';

import './styles.scss';
import logo_small from '../../../src/assets/img/logo_small.png';
import ModalEvent from '../Modal';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useSelector(state => state.user.logged);

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem('user');
    localStorage.removeItem('userInfos');
    navigate("/");
  }

  return (
    <Menu
      className="navbar__menu"
      color={'orange'}
      icon
      inverted    
    >
      <Menu.Menu position='left'>

        <Menu.Item
          as={NavLink}
          name='home'
          to={'/'}
        >
          <img alt="small-logo" src={logo_small} />
        </Menu.Item>
        {logged && <Menu.Item
          as={NavLink}
          name='dashboard'
          to={'/dashboard'}
          title='Tableau de bord'
        >
          <Icon name='home'/>
        </Menu.Item>}
        {logged && <Menu.Item
          as={NavLink}
          name='events'
          to={'/events'}
          title='Évènements'
        >
          <Icon name='map pin'/>
        </Menu.Item>}
      </Menu.Menu>
      <Menu.Menu position='right'>
        {logged && <Menu.Item>
          <ModalEvent />
        </Menu.Item>}
        <Menu.Item>
          <Button
            circular
            icon='user'
            color='yellow'
            as={Link}
            to={logged ? '/profile' : '/'}
            inverted
          />
        </Menu.Item>
        {logged && <Menu.Item>
          <Button
            circular
            icon='log out'
            color='yellow'
            inverted
            onClick={handleLogOut}
          />
        </Menu.Item>}
      </Menu.Menu>
    </Menu>
  );
}
