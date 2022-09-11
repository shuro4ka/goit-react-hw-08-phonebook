import { ContactElement } from "components/ContactElement/ContactElement";
//import PropTypes from "prop-types";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                    <ContactElement
                        key={ id }
                        id={ id }
                        name={ name }
                        number={ number } 
                        onDeleteContact={ onDeleteContact }    
                    />
                )
            })}
        </ul>
    );
};