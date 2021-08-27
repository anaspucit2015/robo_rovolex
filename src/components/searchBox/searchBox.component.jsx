import React from 'react'
import "./searchBox.styles.css"
const SearchBox=({placeholder, handleChange})=>{
    return(
        <div>
         <input className="search" type="text" placeholder={placeholder}
            onChange={handleChange}
         />
        </div>
    )
}
export default SearchBox;