import { useDispatch } from 'react-redux';
import { signUp } from '../../../actions/user';

import { Button } from 'semantic-ui-react';
import ControlledInput from '../../ControlledInput';

import './styles.scss';

export default function Register() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp());
    };

    const test = (e) => {
        e.preventDefault();
        const storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        console.log(storage);
    }

    return (
        <div className="home">
            <div className="home__left">
                <div className="home__left__titles">
                    <h1 className="home__left__titles__title">Bienvenue sur Board Game Friends</h1>
                    <h2 className="home__left__titles__subtitle">Trouvez des joueurs autour de vous pour compléter vos parties !</h2>
                </div>
                <div className="home__left__desc">
                    <p className="home__left__desc__content">Prêts à nous rejoindre ? Inscrivez-vous !</p>
                </div>
                <div className="home__left__footer">
                    <p className="home__left__footer__link">F.A.Q</p>
                    <p className="home__left__footer__link">CGU</p>
                    <p className="home__left__footer__link">Contact</p>
                </div>
            </div>
            <div className="home__right">
                <div className="home__right__header">
                    <p>Inscrivez-vous</p>
                </div>
                <form className="home__right__form" onSubmit={test}>
                <div className="home__right__form__infos">
                <label className="home__right__form__infos__label" htmlFor="email">Email</label>
                <ControlledInput name="email" type="email" placeholder="Email" />
                <label className="home__right__form__infos__label" htmlFor="username">Pseudo</label>
                <ControlledInput name="username" type="text" placeholder="Pseudo" />
                <label className="home__right__form__infos__label" htmlFor="city">Ville</label>
                <ControlledInput name="city" type="text" placeholder="Ville" />
                </div>
                <div className="home__right__form__passwords">
                <label className="home__right__form__infos__label" htmlFor="password">Mot de passe</label>
                <ControlledInput name="password" type="password" placeholder="Mot de passe" />
                <label className="home__right__form__infos__label" htmlFor="password-confirm">Confirmez votre mot de passe</label>
                <ControlledInput name="password-confirm" type="password" placeholder="Mot de passe" />
                </div>
                <Button
                    color="orange"
                    size="big"
                    type="submit"
                >
                Continuer
                </Button>
                </form>
            </div>
        </div>
    )
};