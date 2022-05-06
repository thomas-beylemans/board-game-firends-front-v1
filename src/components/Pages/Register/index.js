import { useDispatch } from 'react-redux';
import { signUp } from '../../../actions/user';
import { Link } from 'react-router-dom';

import { Button, Grid, Image, Checkbox, Header, Icon } from 'semantic-ui-react';
import bg_img from '../../../assets/img/bg_home.avif';

import ControlledInput from '../../ControlledInput';

import './styles.scss';

export default function Register() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp());
    };

    return (
        <div className="register">
            <Grid columns={2} stackable className="register__container">
                <Grid.Row className="register__container__row">
                    <Grid.Column textAlign="left" className="register__container__column">
                        <Image className="register__container__column__img" src={bg_img} />
                        <Grid.Row>
                            <Header className="register__container__column__h1" as='h1'>Bienvenue sur Board Game Friends</Header>
                            <Header className="register__container__column__h2" as='h2'>Trouvez des joueurs autour de vous pour compléter vos parties !</Header>
                            <Header.Subheader className="register__container__column__sub">
                                Prêts à nous rejoindre ? Inscrivez-vous !
                            </Header.Subheader>
                        </Grid.Row>
                        <Grid columns={3} className="register__container__footer">
                            <Grid.Row>
                                <Grid.Column width={2}><Link to="/faq" className="register__container__footer__nav">F.A.Q</Link></Grid.Column>
                                <Grid.Column width={2}><Link to="/terms-of-use" className="register__container__footer__nav">CGU</Link></Grid.Column>
                                <Grid.Column width={2}><Link to="/team" className="register__container__footer__nav">Contact</Link></Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column textAlign="center" className="register__container__column">
                        <Grid.Row>
                            <Header as='h2' icon textAlign='center' className="home__container__column__header">
                                <Icon name='save' circular />
                                <Header.Content>S'enregistrer</Header.Content>
                            </Header>
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <Grid.Row>
                                    <ControlledInput className="register__container__column__input" label='E-mail' name="email" type="email" placeholder="Email" />
                                </Grid.Row>
                                <Grid.Row>
                                    <ControlledInput className="register__container__column__input" label='Pseudo' name="username" type="text" placeholder="Pseudo" />
                                </Grid.Row>
                                <Grid.Row>
                                    <ControlledInput className="register__container__column__input" label='Ville' name="city" type="text" placeholder="Ville" />
                                </Grid.Row>
                                <Grid.Row>
                                    <ControlledInput className="register__container__column__input" label='Mot de passe' name="password" type="password" placeholder="Mot de passe" />
                                </Grid.Row>
                                <Grid.Row>
                                    <ControlledInput className="register__container__column__input" label='Répéter' name="password-confirm" type="password" placeholder="Mot de passe" />
                                </Grid.Row>
                                <Checkbox className="home__container__column__checkbox" toggle label="J'accepte les conditions générales d'utilisation" />
                                <Grid.Row>
                                    <Button
                                        className="register__container__column__button"
                                        color="orange"
                                        size="big"
                                        type="submit"
                                    >
                                        S'enregistrer
                                    </Button>
                                </Grid.Row>
                            </form>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
};