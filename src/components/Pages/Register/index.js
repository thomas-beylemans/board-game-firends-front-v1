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

    return (
        <div className="register">
            <div className="register__left">
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
            </div>
            <div className="register__right">
                <div className="register__right__header">
                    <p>Inscrivez-vous</p>
                </div>
                <form className="register__right__form" onSubmit={handleSubmit}>
                <div className="register__right__form__infos">
                <label className="register__right__form__infos__label" htmlFor="email">Email</label>
                <ControlledInput name="email" type="email" placeholder="Email" />
                <label className="register__right__form__infos__label" htmlFor="username">Pseudo</label>
                <ControlledInput name="username" type="text" placeholder="Pseudo" />
                <label className="register__right__form__infos__label" htmlFor="city">Ville</label>
                <ControlledInput name="city" type="text" placeholder="Ville" />
                </div>
                <div className="register__right__form__passwords">
                <label className="register__right__form__infos__label" htmlFor="password">Mot de passe</label>
                <ControlledInput name="password" type="password" placeholder="Mot de passe" />
                <label className="register__right__form__infos__label" htmlFor="password-confirm">Confirmez votre mot de passe</label>
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