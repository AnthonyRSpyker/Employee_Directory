import React from "react";

function Search(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search Employee Names:</label>
        <input
          onChange={event => props.handleFormSearch(event)}
          name="search"
        />
        <br />
      </div>
    </form>
  );
}

export default Search;