import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

export default function Alert({ hidden, message, negative, positive, color }) {
  return (
    <Message color={color} hidden={hidden} negative={negative} positive={positive} floating>{message}</Message>
  );
};

Alert.defaultProps = {
  hidden: true,
  message: '',
};

Alert.propTypes = {
  isHidden: PropTypes.bool,
  errorMessage: PropTypes.string,
  negative: PropTypes.bool.isRequired,
  positive: PropTypes.bool.isRequired,
};
