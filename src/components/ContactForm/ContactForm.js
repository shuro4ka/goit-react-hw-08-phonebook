import { AddButton} from './ContactForm.styled';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contactsSlice';


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
 

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if(name === 'name') {
      setName(value);
    }else {
      setNumber(value);
    }
  };
   
  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: name,
      number: number,
      id: nanoid()
    }
    dispatch(addContact(contact))
    setName('')
    setNumber('')
  };


return (
  <form  autoComplete="off" onSubmit={handleSubmit}>
    <label htmlFor="name">
      Name
      <input 
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
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
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
      <AddButton type="submit">Add contact</AddButton>
  </form>
)
};

