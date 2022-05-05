import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../../actions/user';

import { Button, Grid, Image, Checkbox, Header, Icon } from 'semantic-ui-react';
import bg_img from '../../../assets/img/bg_home.avif';

import ControlledInput from '../../ControlledInput';

import './styles.scss';

export default function SignIn() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login());
    };

    return (
        <div className="home">
            <Grid columns={2} stackable className="home__container">
                <Grid.Row className="home__container__row">
                    <Grid.Column textAlign="left" className="home__container__column">
                        <Image src={bg_img} />
                        <Grid.Row>
                            <Header as='h1'>Bienvenue sur Board Game Friends</Header>
                            <Header as='h2'>Trouvez des joueurs autour de vous pour compléter vos parties !</Header>
                            <Header.Subheader>
                                Prêts à nous rejoindre ? Inscrivez-vous !
                            </Header.Subheader>
                        </Grid.Row>
                        <Grid columns={3} className="home__footer">
                        <Grid.Row>
                            <Grid.Column width={2}><Link to="/faq" className="footer__nav">F.A.Q</Link></Grid.Column>
                            <Grid.Column width={2}><Link to="/terms-of-use" className="footer__nav">CGU</Link></Grid.Column>
                            <Grid.Column width={2}><Link to="/team" className="footer__nav">Contact</Link></Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column textAlign="center" className="home__container__column">
                        <Grid.Row>
                            <Header as='h2' icon textAlign='center'>
                                <Icon name='unlock' circular />
                                <Header.Content>Connexion</Header.Content>
                            </Header>
                            <form onSubmit={handleSubmit}>
                                <Grid.Row>
                                    <ControlledInput label='E-mail' name="email" type="email" placeholder="Email" />
                                </Grid.Row>
                                <Grid.Row>
                                    <ControlledInput label='Mot de passe' name="password" type="password" placeholder="Mot de passe" />
                                </Grid.Row>
                                <Checkbox toggle label="J'accepte les conditions générales d'utilisation" />
                                <Grid.Row>
                                    <Button
                                        color="orange"
                                        size="big"
                                        type="submit"
                                    >
                                        Connexion
                                    </Button>
                                </Grid.Row>
                            </form>
                        </Grid.Row>
                        <Grid.Row>
                            <Button
                                color="orange"
                                size="big"
                                type="button"
                            >
                                Mot de passe oublié
                            </Button>
                        </Grid.Row>
                        <Grid.Row>
                            <Link to="/register">
                                <Button
                                    color="orange"
                                    size="big"
                                    type="button"
                                >
                                    Inscrivez-vous
                                </Button>
                            </Link>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
};