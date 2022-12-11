import PropTypes from "prop-types";
import { FilterInput } from "./Filter.styled";

export const Filter = ({ filter, handleInputChange }) => {
    return (
        <FilterInput 
            type="text" 
            name="name" 
            value={filter}
            onChange={handleInputChange} 
        />
    )
}

Filter.propTypes = {
   filter: PropTypes.string.isRequired, 
   handleInputChange: PropTypes.func.isRequired,
}