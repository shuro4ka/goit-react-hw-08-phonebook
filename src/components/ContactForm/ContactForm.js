import { AddButton } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts).items;

  const handleSubmit = e => {
    e.preventDefault();

    const {
      elements: { name, number },
    } = e.target;

    const index = contacts.findIndex(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );

    if (index >= 0) {
      alert(`${name.value} is already in contacts.`);
      e.target.reset();
      return;
    }

    const contact = {
      name: name.value,
      phone: number.value,
    };

    dispatch(addContact(contact));
    e.target.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name must be letters and can contain spaces,dashes"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <AddButton type="submit">Add contact</AddButton>
    </form>
  );
};
