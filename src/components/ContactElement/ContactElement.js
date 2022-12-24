import PropTypes from 'prop-types';
import { DeleteButton } from './ContactElement.styled';

export const ContactElement = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      {name} : {number}
      <DeleteButton
        onClick={() => {
          onDeleteContact(id);
        }}
        type="button"
      >
        Delete
      </DeleteButton>
    </li>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
