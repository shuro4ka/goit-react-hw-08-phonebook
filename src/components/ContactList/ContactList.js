import { ContactElement } from "components/ContactElement/ContactElement";
//import PropTypes from "prop-types";

export const ContactList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(({id, name, number}) => {
                return (
                    <ContactElement
                        key={id}
                        name={name}
                        number={number}
                    />
                )
            })}
        </ul>
    );
};