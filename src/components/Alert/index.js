import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

export default function Alert({ hidden, message }) {
  return (
    <Message hidden={hidden} negative floating>{message}</Message>
  );
};

Alert.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
