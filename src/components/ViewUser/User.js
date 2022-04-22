import { useState } from "react";

const User = (props) =>{
  const [showAddress , setShowAddress] =useState(false);
   const showHandler =() =>{
       setShowAddress(!showAddress)
   }
  return (
      <div className="list-users">
          <div onClick={showHandler}>{props.data.name}</div>
          {showAddress && 
            <ul className="user-address">
                <li>Street: {props.data.address.street}</li>
                <li>Suite: {props.data.address.suite}</li>
                <li>City: {props.data.address.city}</li>
                <li>Zip code: {props.data.address.zipcode}</li>
            </ul>
          }
      </div>
        
  )
}
export default User;