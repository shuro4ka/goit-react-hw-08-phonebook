import { Formik } from 'formik';
import { FormikLabel, AddButton, FormikInput } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const { name, number } = e.target.elements;
        addContact(name.value, number.value);
        e.target.reset();
    };

    return ( 
        <Formik>
            <form 
                autoComplete="off"
                onSubmit={handleSubmit} >
                <label htmlFor="name">
                    <FormikLabel>Name</FormikLabel>
                <FormikInput type="text" name="name" />
                </label>

                <label htmlFor="number">
                <FormikLabel>Number</FormikLabel>
                {/* <input type="number" name="number" /> */}
                <FormikInput 
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </label>

                <AddButton type="submit">Add contact</AddButton>
            </form>
        </Formik>
    )
};