import { Component } from "react";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';
import { GlobalStyle } from "./GlobalStyle";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  addContact = (name, number) => {
    const isExist = this.state.contacts.find((contact) => { 
      if(contact.name === name || contact.number === number) {
        return true;
      } else {
        return false;
      }
    });

    if (isExist) {
      return alert('Contact with this details already exists!');
    }
    
    const newContact = {
      id: nanoid(),
      name,
      number,
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    });
  };

  handleInputChange = (event) => {
    this.setState({filter: event.target.value});
  }

  filterContacts = () => {
    return this.state.contacts.filter(contact => 
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))  
  };
  
  deleteContact = (idToDelete) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idToDelete),
    }));
  };


  render(){
    const filteredContacts = this.filterContacts();
  
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm 
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter 
        filter={this.state.filter}
        handleInputChange={this.handleInputChange}
        />
        <ContactList 
          // contacts = {filteredContacts.length > 0 ? filteredContacts : this.state.contacts} 
          contacts = {filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle/>
      </div>
    );
};
}