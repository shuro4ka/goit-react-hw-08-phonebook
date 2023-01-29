import { DeleteButton } from './ContactElement.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactElement = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  console.log(phone, name);

  return (
    <li>
      {name} : {phone}
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
