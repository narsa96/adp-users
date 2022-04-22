import React from "react";
import User from "./User";

/** Component to display list of users  */
const ListOfUsers = (props) =>{
    let numberOfRecords = props.usersData.length;

  return (
      <React.Fragment>
        {numberOfRecords === 0 ? <p>No Record Found</p>  : 
            props.usersData.map(user=>{     
              return ( 
                <User
                    key = {user.id}
                    data={user} 
                  />
              )
      })
      }
    </React.Fragment>
  );
    
}
export default ListOfUsers;