
import { DeleteButton } from './ContactElement.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name} : {number}
      <DeleteButton
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        type="button"
      >
        Delete
      </DeleteButton>
    </li>
  );
};


