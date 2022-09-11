export const Filter = ({ filter, handleInputChange }) => {
    return (
        <input 
            type="text" 
            name="name" 
            value={filter}
            onChange={handleInputChange} 
        />
    )
}