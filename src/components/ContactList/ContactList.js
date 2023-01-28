import { ContactElement } from 'components/ContactElement/ContactElement';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { selectContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const {items, isLoading, error} = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (filter) {
      return items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return items;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      {isLoading && <b>Loading...</b>}
      {error && <b>{error.message}</b>}
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
    </div>
  );
};
