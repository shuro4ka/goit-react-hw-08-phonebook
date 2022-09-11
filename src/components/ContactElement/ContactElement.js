import PropTypes from "prop-types";

export const ContactElement = ({ id, name, number, onDeleteContact }) => {
   return (
        <li>
            {name} : {number} 
            <button onClick={() => { onDeleteContact(id) }} type="button">Delete</button>
        </li>
   ) 
}


// ContactElement.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
// }