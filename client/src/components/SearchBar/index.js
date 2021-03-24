import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <label style={{fontSize:"25px", marginLeft:"20px"}} htmlFor="search">Find Books:</label>
        <input
          onChange={e => props.handleInputChange(e)}
        //   value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search..."
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchBar;