import { FaSearch } from "react-icons/fa";

const Search = ({search, setSearch}) => {
  return (
    <form className="container searchForm" onSubmit={e => e.preventDefault()}>
      <div className="input-group">
        <label htmlFor="Search Form" className="search-label">Search Form</label>
        <button className="btn btn-outline-secondary search-btn"><FaSearch /> </button>
        <input 
          type="text"
          placeholder="Search"
          className="form-control"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Search;