import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterInput
      placeholder="Search"
      type="text"
      name="filter"
      onChange={handleChange}
    />
  );
};
