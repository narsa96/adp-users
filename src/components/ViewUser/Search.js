import { useState } from "react";


const Search =(props) =>{
    const [filter , setFilter] =useState('');
 const onChangeEvent = e => {
     let tempVal = e.target.value;
     setFilter(tempVal)
     props.onFilter(tempVal);
 }
 /** TODO: Adding the "X" icon inside of search text to clear the text at once */
  return (
         <input className="input-search" type='text' placeholder="Filter Users..." 
         value = {filter}
         onChange = {onChangeEvent} />
  )
}

export default Search;
