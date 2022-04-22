import React,{Fragment}  from "react";
import Search from "./Search";
import ListOfUsers from "./ListOfUsers";
import { useState,useEffect } from "react";
import useHttp from '../../hooks/use-http';

/** We can use REDUX or React context to maintain state 
 * and subscribe for the changes in this component. 
 * Because of time constraint, I am choosing to use the useEffect Hook
 * to retrieve state and display data, Loading and Error Message..
 * For the Error scenarios, We can dispplay modal window **/
function AdminPage() {
  const [allUsers, setAllUsers] = useState([]);  
  const { isLoading, error, sendRequest:fetchParams } = useHttp();
  const [ fetchAllData, setFetchAllData] = useState(false);

  useEffect(() => {
    const getData = (usersObj) => {
        setAllUsers(usersObj);
      };   
      /**TODO: Move URLs to central file */
      fetchParams(
      { url: 'https://jsonplaceholder.typicode.com/users' },
      getData
    );
  }, [fetchParams,fetchAllData]);

  const filterHandler = (filterChars) =>{
    let filteredData = allUsers.filter(
      user => user.name.toLowerCase().match(filterChars.toLowerCase()));    
    if(filterChars.length === 0){
        setFetchAllData(!fetchAllData);
    } else {
      setAllUsers(filteredData);
    }
  }

  /** TODO: Error message handling and Loading spinner component building **/
  return (
   <Fragment>
     <h1>ADP Users</h1> 
     {isLoading === true ? <div> Loading...</div> : 
        <Fragment>
            <Search onFilter={filterHandler} />
            <ListOfUsers 
            usersData = {allUsers}
            />
        </Fragment>
     }
   </Fragment>
  );
}

export default AdminPage;
