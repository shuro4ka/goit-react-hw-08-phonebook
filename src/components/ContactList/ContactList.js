import { ContactElement } from 'components/ContactElement/ContactElement';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filtersSlice';
import { selectContacts } from 'redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const getFilteredContacts = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <section>
      <h2>Contacts</h2>

      <ul>
        {Array.isArray(filteredContacts)
          ? filteredContacts.map(({ id, name, number }) => {
              return (
                <ContactElement
                  key={id}
                  id={id}
                  name={name}
                  number={number}
                ></ContactElement>
              );
            })
          : null}
      </ul>
    </section>
  );
};
