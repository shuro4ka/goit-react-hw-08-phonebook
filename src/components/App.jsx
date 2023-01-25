import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter/>
      <ContactList />
      <GlobalStyle />
    </>
  );
};

