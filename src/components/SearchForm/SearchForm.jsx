import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="search-form">
      <input
        required
        className="search-form__input"
        type="text"
        placeholder="Search for news"
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
