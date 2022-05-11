import { useEffect, useState } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import { gitAPI } from '../../../utils/gitAPI';

import Navbar from '../../../components/Navbar';
import Banner from '../../Banner';
import Footer from '../../Footer';

import './styles.scss';

export default function Team() {

  const [team, setTeam] = useState([]);

  const fetchTeam = async () => {
    const francois = await gitAPI('francois-demory');
    const thomas = await gitAPI('thomas-beylemans');
    const coraline = await gitAPI('CoralineBouyer');
    const brandon = await gitAPI('sakomoto987');
    const daniel = await gitAPI('DanielPazMorales');
    setTeam([francois, thomas, coraline, brandon, daniel]);
  }

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div className="team">
      <Navbar />
      <Banner />
      <div className="team__content">
        {
          team.map((member) => (
            <div className="team__content__card" key={member.id}>
              <Image src={member.avatar_url} size='medium' circular />
              <Card>
                <Card.Content className="team__content__card__content">
                  <Card.Header className="team__content__card__title">{member.name}</Card.Header>
                  <Card.Meta>
                  <Icon name='github' />
                  <a href={member.html_url}>Page GitHub</a>
                  </Card.Meta>
                  <Card.Meta>
                  <Icon name='linkedin' />
                  <a href={member.blog}>Profil Linkedin</a>
                  </Card.Meta>
                </Card.Content>
              </Card>
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  );
}
