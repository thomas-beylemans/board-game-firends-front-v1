import { Link } from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react';

import Navbar from '../../../components/Navbar';
import Banner from '../../Banner';
import Footer from '../../Footer';

import './styles.scss';

export default function Team() {
  return (
    <div className="team">
      <Navbar />
      <Banner />
      <div className="team__content">
        <div className="team__content__card">
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
          <Card>
            <Card.Content>
              <Card.Header>Member Name</Card.Header>
              <Card.Meta>
                <span>Job Title</span>
              </Card.Meta>
              <Card.Description>
                Short description
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='github' />
              <a href='#'>Repo Name</a>
              <Icon name='linkedin' />
              <a href='#'>Linkedin</a>
            </Card.Content>
          </Card>
        </div>
        <div className="team__content__card">
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
          <Card>
            <Card.Content>
              <Card.Header>Member Name</Card.Header>
              <Card.Meta>
                <span>Job Title</span>
              </Card.Meta>
              <Card.Description>
                Short description
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='github' />
              <a href='#'>Repo Name</a>
              <Icon name='linkedin' />
              <a href='#'>Linkedin</a>
            </Card.Content>
          </Card>
        </div>
        <div className="team__content__card">
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
          <Card>
            <Card.Content>
              <Card.Header>Member Name</Card.Header>
              <Card.Meta>
                <span>Job Title</span>
              </Card.Meta>
              <Card.Description>
                Short description
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='github' />
              <a href='#'>Repo Name</a>
              <Icon name='linkedin' />
              <a href='#'>Linkedin</a>
            </Card.Content>
          </Card>
        </div>
        <div className="team__content__card">
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
          <Card>
            <Card.Content>
              <Card.Header>Member Name</Card.Header>
              <Card.Meta>
                <span>Job Title</span>
              </Card.Meta>
              <Card.Description>
                Short description
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='github' />
              <a href='#'>Repo Name</a>
              <Icon name='linkedin' />
              <a href='#'>Linkedin</a>
            </Card.Content>
          </Card>
        </div>
        <div className="team__content__card">
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
          <Card>
            <Card.Content>
              <Card.Header>Member Name</Card.Header>
              <Card.Meta>
                <span>Job Title</span>
              </Card.Meta>
              <Card.Description>
                Short description
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='github' />
              <a href='#'>Repo Name</a>
              <Icon name='linkedin' />
              <a href='#'>Linkedin</a>
            </Card.Content>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
