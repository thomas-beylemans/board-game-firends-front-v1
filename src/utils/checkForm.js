import { validate } from 'react-email-validator';

export const checkPassword = (password, passwordConfirm) => {
  if (password !== passwordConfirm) {
    return 'Les mots de passe ne correspondent pas';
  }
  if (password.length < 8) {
    return 'Le mot de passe doit contenir au moins 8 caractères';
  }
  if (password.length > 20) {
    return 'Le mot de passe doit contenir au maximum 20 caractères';
  }
  if (!password.match(/\d/)) {
    return 'Le mot de passe doit contenir au moins un chiffre';
  }
  if (!password.match(/[a-z]/i)) {
    return 'Le mot de passe doit contenir au moins une lettre minuscule';
  }
  if (!password.match(/[A-Z]/i)) {
    return 'Le mot de passe doit contenir au moins une lettre majuscule';
  }
  if (!password.match(/[^a-zA-Z0-9]/)) {
    return 'Le mot de passe doit contenir au moins un caractère spécial';
  }
  return null;
};

export const checkEmail = (email) => {
  const validated = validate(email);
  if (!validated) {
    return `L'adresse email n'est pas valide`;
  }
  return '';
}

export const checkUsername = (username) => {
  if (username.length < 3) {
    return 'Le pseudo doit contenir au moins 3 caractères';
  }
  return '';
}

export const checkTerms = (checked) => {
  if (!checked) {
    return `Veuillez accepter les conditions d'utilisation`;
  }
  return '';
}

export const checkForm = (password, passwordConfirm, email, username, checked) => {
  const passwordChecked = checkPassword(password, passwordConfirm);
  const emailChecked = checkEmail(email);
  const usernameChecked = checkUsername(username);
  const termsChecked = checkTerms(checked);
  if (passwordChecked || emailChecked || usernameChecked || termsChecked) {
    return { passwordChecked, emailChecked, usernameChecked, termsChecked };
  }
  return {};
}
