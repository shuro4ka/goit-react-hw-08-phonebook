import { Formik } from 'formik';

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
                    Name
                <input type="text" name="name" />
                </label>

                <label htmlFor="number">
                Number
                {/* <input type="number" name="number" /> */}
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </label>

                <button type="submit">Add contact</button>
            </form>
        </Formik>
    )
};