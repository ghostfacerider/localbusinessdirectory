import React from 'react'

export const Search = () => {
  return (
    <form className="main-search-wrap fl-wrap half-column">
      <div className="main-search-item">
        <span className="search-tag">Find</span>
        <input
          type="text"
          className="form-control radius"
          placeholder="Nail salons, plumbers, takeout..."
        />
      </div>
      <div className="main-search-item">
        <span className="search-tag">Where</span>
        <input
          type="text"
          className="form-control"
          placeholder="San Francisco, CA"
        />
      </div>
      <div className="main-search-button">
        <button className="btn full-width theme-bg text-white" type="button">
          Search<i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default Search