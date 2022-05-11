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
            <div className="team__content__card">
              <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
              <Card key={member.id}>
                <Card.Content>
                  <Card.Header>{member.name}</Card.Header>
                  <Card.Meta>
                  <Icon name='github' />
                  <a href={member.html_url}>{member.html_url}</a>
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
