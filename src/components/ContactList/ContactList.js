import { ContactElement } from "components/ContactElement/ContactElement";
import PropTypes from "prop-types";
import { ContactItems } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactItems>
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
        </ContactItems>
    );
};

ContactList.propTypes = {
    // onDeleteContact:PropTypes.func.isRequired,
    contacts:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        })).isRequired,
};
