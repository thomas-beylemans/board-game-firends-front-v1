import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeEventValue } from '../../actions/event';
import { Input } from 'semantic-ui-react';
import './styles.scss';

export default function ControlledInput({ name, ...otherProps }) {
  const value = useSelector((state) => state[name]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeEventValue(name, e.target.value));
  };

  return (
    <Input name={name} value={value} onChange={handleChange} {...otherProps} />
  );
}

ControlledInput.propTypes = {
  name: PropTypes.string.isRequired,
};
