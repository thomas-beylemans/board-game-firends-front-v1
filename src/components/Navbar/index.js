import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logOut } from '../../../src/actions/user';

import './styles.scss';
import logo_small from '../../../src/assets/img/logo_small.png';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useSelector(state => state.user.logged);

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem('user');
    navigate("/");
  }

  return (
    <Menu
      className="navbar__menu"
      color={'orange'}
      inverted
      stackable
    >
      <Menu.Menu position='left'>

        <Menu.Item
          as={NavLink}
          name='home'
          to={'/'}
        >
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
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Button
            circular
            icon='plus circle'
            color='yellow'
            as={Link}
            to={'/events'}
            inverted
          />
        </Menu.Item>
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
