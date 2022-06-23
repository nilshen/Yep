import React from "react";
import { FiSearch } from "react-icons/fi"


class SearchBar extends React.Component {

    render() { 
        return (
            <div className="searchbar-container">
                <p className="searchbar-restaurant">
                    <input 
                    type="text" 
                    placeholder="Restaurants..."
                    
                    />
                </p>

                <p className="searchbar-location">
                    <input 
                    type="text" 
                    placeholder="New York, NY"
                    />
                </p>
                <FiSearch className="searchbar-icon"/>
            </div>
        );
    }
}
 
export default SearchBar;