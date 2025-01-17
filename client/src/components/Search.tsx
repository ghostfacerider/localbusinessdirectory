import React, { useState, ChangeEvent, FormEvent } from 'react';

interface SearchProps {
  onSearch: (searchData: { findQuery: string; whereQuery: string }) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [findQuery, setFindQuery] = useState<string>('');
  const [whereQuery, setWhereQuery] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      onSearch({ findQuery, whereQuery });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form className="main-search-wrap fl-wrap half-column">
      <div className="main-search-item">
        <span className="search-tag">Find</span>
        <input
          type="text"
          className="form-control radius"
          placeholder="Nail salons, plumbers, takeout..."
          value={findQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFindQuery(e.target.value)
          }
        />
      </div>
      <div className="main-search-item">
        <span className="search-tag">Where</span>
        <input
          type="text"
          className="form-control"
          placeholder="San Francisco, CA"
          value={whereQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setWhereQuery(e.target.value)
          }
        />
      </div>
      <div className="main-search-button">
        <button
          className="btn full-width theme-bg text-white"
          type="button"
          onClick={handleSubmit}
        >
          Search<i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
