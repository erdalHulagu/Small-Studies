import React from "react";

// Comment satırı

/*
    Comment bloğu
*/

const Jsx3 = () => {
  const isAdmin = true;

  if(isAdmin){

  }
  else{
    
  }

  return (
    <div>
      {isAdmin ? (
        <div>
          <h2>Admin Menu</h2>
          <ul>
            <li>Create User</li>
            <li>Update User</li>
            <li>Delete User</li>
          </ul>
        </div>
      ) : (
        <div>
          <h2>User Menu</h2>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Jsx3;
