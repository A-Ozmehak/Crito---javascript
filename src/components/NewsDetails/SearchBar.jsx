import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {

    return (
        <div className="search-bar">
            {/* <div className="icon"><i className="fa-solid fa-magnifying-glass"></i></div> */}
           <FaSearch className="search-icon" />

           <input type="text" placeholder="Type to search..." />
        </div>
    )
}

export default SearchBar;