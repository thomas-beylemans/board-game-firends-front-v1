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

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("userInfos"));
    if (loggedUser) {
      dispatch(saveUserInfos(loggedUser.user));
    }
    window.scrollTo(0, 0, { behavior: 'smooth' });

  }, []);

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
            <p>Lorem ipsum dolor sit amet. Cum dolor sapiente sit sint quas aut voluptas mollitia id excepturi possimus? Et consectetur consectetur ea nihil maxime non reiciendis consequatur nam enim voluptas ab minima veritatis. Aut tenetur corporis <em>Et dignissimos non consequuntur nisi qui omnis dolores eum consequatur consequatur</em>. </p>
            <p>Vel sequi consequatur eum ducimus doloribusex aspernatur qui libero iste. Aut ducimus earum ut reprehenderit incidunt nam galisum amet. Qui iure sunt <em>Sit ipsam et dolores veritatis</em>. </p>
            <p>Et perferendis nulla <em>Vel maxime aut quis iusto qui eligendi temporibus</em> vel internos  ab illum voluptate sit quia tenetur. Ut laborum blanditiis qui labore eiusa magnam ea alias corporis qui autem voluptatem. Sed suscipit cumque eum veritatis minus ut illum recusandae id blanditiis voluptatum a animi aspernatur! </p>
            <p>At minus vitae <em>Sit quia ut eius voluptatem a nihil porro</em> ut quisquam quas qui  ipsam. Et quis blanditiis <strong>Et blanditiis et fugiat excepturi aut omnis consequatur</strong> ad officia corporis non consectetur minus! Ex eius velit sed architecto explicabo et dicta nesciunt sit omnis libero est quas explicabo. </p>
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
            <p>Lorem ipsum dolor sit amet. Cum dolor sapiente sit sint quas aut voluptas mollitia id excepturi possimus? Et consectetur consectetur ea nihil maxime non reiciendis consequatur nam enim voluptas ab minima veritatis. Aut tenetur corporis <em>Et dignissimos non consequuntur nisi qui omnis dolores eum consequatur consequatur</em>. </p>
            <p>Vel sequi consequatur eum ducimus doloribusex aspernatur qui libero iste. Aut ducimus earum ut reprehenderit incidunt nam galisum amet. Qui iure sunt <em>Sit ipsam et dolores veritatis</em>. </p>
            <p>Et perferendis nulla <em>Vel maxime aut quis iusto qui eligendi temporibus</em> vel internos  ab illum voluptate sit quia tenetur. Ut laborum blanditiis qui labore eiusa magnam ea alias corporis qui autem voluptatem. Sed suscipit cumque eum veritatis minus ut illum recusandae id blanditiis voluptatum a animi aspernatur! </p>
            <p>At minus vitae <em>Sit quia ut eius voluptatem a nihil porro</em> ut quisquam quas qui  ipsam. Et quis blanditiis <strong>Et blanditiis et fugiat excepturi aut omnis consequatur</strong> ad officia corporis non consectetur minus! Ex eius velit sed architecto explicabo et dicta nesciunt sit omnis libero est quas explicabo. </p>
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
            <p>Lorem ipsum dolor sit amet. Cum dolor sapiente sit sint quas aut voluptas mollitia id excepturi possimus? Et consectetur consectetur ea nihil maxime non reiciendis consequatur nam enim voluptas ab minima veritatis. Aut tenetur corporis <em>Et dignissimos non consequuntur nisi qui omnis dolores eum consequatur consequatur</em>. </p>
            <p>Vel sequi consequatur eum ducimus doloribusex aspernatur qui libero iste. Aut ducimus earum ut reprehenderit incidunt nam galisum amet. Qui iure sunt <em>Sit ipsam et dolores veritatis</em>. </p>
            <p>Et perferendis nulla <em>Vel maxime aut quis iusto qui eligendi temporibus</em> vel internos  ab illum voluptate sit quia tenetur. Ut laborum blanditiis qui labore eiusa magnam ea alias corporis qui autem voluptatem. Sed suscipit cumque eum veritatis minus ut illum recusandae id blanditiis voluptatum a animi aspernatur! </p>
            <p>At minus vitae <em>Sit quia ut eius voluptatem a nihil porro</em> ut quisquam quas qui  ipsam. Et quis blanditiis <strong>Et blanditiis et fugiat excepturi aut omnis consequatur</strong> ad officia corporis non consectetur minus! Ex eius velit sed architecto explicabo et dicta nesciunt sit omnis libero est quas explicabo. </p>
          </Accordion.Content>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
