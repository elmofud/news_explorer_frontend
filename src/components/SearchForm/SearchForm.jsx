import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (evt) => setQuery(evt.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (query.trim() === "") return;
        onSearch(query);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                required
                className="search-form__input"
                type="text"
                placeholder="Enter topic"
                value={query}
                onChange={handleChange}
            />
            <button className="search-form__button" type="submit">
                Search
            </button>
        </form>
    );
};

export default SearchForm;
