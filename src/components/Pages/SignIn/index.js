import { useDispatch } from 'react-redux';
import { login } from '../../../actions/user';

import { Button, Grid, Image } from 'semantic-ui-react';
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
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
                <Image src={bg_img} />
                <div className="register__left__titles">
                    <h1 className="register__left__titles__title">Bienvenue sur Board Game Friends</h1>
                    <h2 className="register__left__titles__subtitle">Trouvez des joueurs autour de vous pour compléter vos parties !</h2>
                </div>
                <div className="register__left__desc">
                    <p className="register__left__desc__content">Prêts à nous rejoindre ? Inscrivez-vous !</p>
                </div>
                <div className="register__left__footer">
                    <p className="register__left__footer__link">F.A.Q</p>
                    <p className="register__left__footer__link">CGU</p>
                    <p className="register__left__footer__link">Contact</p>
                </div>
                </Grid.Column>
                <Grid.Column>
                <div className="register__right__header">
                    <p>Connectez-vous</p>
                </div>
                <form className="register__right__form" onSubmit={handleSubmit}>
                <div className="register__right__form__infos">
                <label className="register__right__form__infos__label" htmlFor="email">Email</label>
                <ControlledInput name="email" type="email" placeholder="Email" />
                </div>
                <div className="register__right__form__passwords">
                <label className="register__right__form__infos__label" htmlFor="password">Mot de passe</label>
                <ControlledInput name="password" type="password" placeholder="Mot de passe" />
                </div>
                <Button
                    color="orange"
                    size="big"
                    type="submit"
                >
                Continuer
                </Button>
                </form>
                </Grid.Column>
            </Grid.Row>

            </Grid>
        </div>
    )
};