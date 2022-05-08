import { validate } from 'react-email-validator';

export const checkPassword = (password, passwordConfirm) => {
  if (password !== passwordConfirm) {
    return 'Les mots de passe ne correspondent pas';
  }
  return '';
};

export const checkEmail = (email) => {
  const validated = validate(email);
  if (!validated) {
    return `L'adresse email n'est pas valide`;
  }
  return '';
}

export const checkTerms = (checked) => {
  if (!checked) {
    return `Veuillez accepter les conditions d'utilisation`;
  }
  return '';
}

export const checkForm = (password, passwordConfirm, email, checked) => {
  const passwordChecked = checkPassword(password, passwordConfirm);
  const emailChecked = checkEmail(email);
  const termsChecked = checkTerms(checked);
  if (passwordChecked || emailChecked || termsChecked) {
    return { passwordChecked, emailChecked, termsChecked };
  }
  return {};
}
