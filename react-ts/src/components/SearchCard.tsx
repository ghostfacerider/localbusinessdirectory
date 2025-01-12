import React, { useState, ChangeEvent, FormEvent } from 'react';
import * as BusinessService from '../services/BusinessService';
import * as businessTypes from '../config/business-types'

interface SearchProps {
  onSearch: (searchData: { findQuery: string; whereQuery: string }) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [findQuery, setFindQuery] = useState<string>('');
  const [whereQuery, setWhereQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const params: businessTypes.SearchParams = { findQuery, whereQuery };

    try {
      const data = await BusinessService.searchApiRequest(params);
      onSearch({ findQuery, whereQuery });
      console.log('Data from API:', data);
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFindQuery(e.target.value)}
        />
      </div>
      <div className="main-search-item">
        <span className="search-tag">Where</span>
        <input
          type="text"
          className="form-control"
          placeholder="San Francisco, CA"
          value={whereQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setWhereQuery(e.target.value)}
        />
      </div>
      <div className="main-search-button">
        <button
          className="btn full-width theme-bg text-white"
          type="button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
          <i className="fas fa-search"></i>
        </button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>} {/* Display error message if any */}
    </form>
  );
};

export default Search;
