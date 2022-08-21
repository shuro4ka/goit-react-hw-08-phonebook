import PropTypes from "prop-types";

export const ContactElement = ({
    id,
    name,
    number,
}) => {
   return (
    <li key={id}>{name}: {number}</li>
   ) 
}

ContactElement.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
}