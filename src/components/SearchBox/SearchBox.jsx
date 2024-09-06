import css from "../SearchBox/SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { nameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();

  const selectNameFilter = useSelector(nameFilter);

  const filter = (e) => {
    const filterValue = e.target.value;
    const action = changeFilter(filterValue);
    dispatch(action);
  };

  return (
    <label htmlFor="search" className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={selectNameFilter}
        onChange={filter}
        name="search"
      />
    </label>
  );
};
export default SearchBox;
