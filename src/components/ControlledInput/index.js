import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { changeValue } from '../../actions'; // We'll need to adjust the path according to where we'll create the actions folder
import { Input } from 'semantic-ui-react';
import './styles.scss';

export default function ControlledInput({ name, ...otherProps }) {
    // const value = useSelector((state) => state[name]);
    // const dispatch = useDispatch();
    // const handleChange = (event) => {       
    //     dispatch(changeValue(name, event.target.value));
    //     // Same as:
    //     // dispatch({
    //     //   type: 'CHANGE_VALUE',
    //     //   value: event.target.value,
    //     //   key: name,
    //     // });
    // };
    return (
        <Input name={'email'} value={'test@toto.com'} onChange={'handleChange'} {...otherProps} />
    );
}

ControlledInput.propTypes = {
    name: PropTypes.string.isRequired,
};
