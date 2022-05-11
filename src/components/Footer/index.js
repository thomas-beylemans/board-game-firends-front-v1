import { Link } from 'react-router-dom';
import './styles.scss';

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/faq" className="footer__link">F.A.Q -</Link>
      <Link to="/terms-of-use" className="footer__link"> CGU -</Link>
      <Link to="/team" className="footer__link"> Contact - </Link>
      Board Game Friends - © 2022
    </div>
  );
};
