import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Accordion, Header, Icon } from 'semantic-ui-react'
import { saveUserInfos } from '../../../actions/user';

import Navbar from '../../../components/Navbar';
import Footer from '../../Footer';

import './styles.scss';

export default function CGU() {
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, activeIndex) => {
    setActiveIndex(activeIndex.index);
  }

  useEffect (() => {
  const loggedUser = JSON.parse(localStorage.getItem("userInfos"));
        if (loggedUser) {
            dispatch(saveUserInfos(loggedUser.user));
        }
  }, [dispatch]);
  
  return (
    <div className="cgu">
      <Navbar />
      <Header as="h1" className="cgu__title">Conditions générales d'utilisation</Header>
      <div className="cgu__content">
        <Accordion styled fluid className="cgu__content__accordion">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <Icon name='dropdown' />
            Article 1
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
          >
            <Icon name='dropdown' />
            Article 2
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
          >
            <Icon name='dropdown' />
            Article 3
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
