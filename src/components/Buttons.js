import React from "react";

function AgeButtons(props) {
  return (
    <form>
      <div className="form-group">
      <button onClick={(event) => props.sortAge(event)} className="btn btn-primary">
          Age
        </button>
        {/* <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default AgeButtons;