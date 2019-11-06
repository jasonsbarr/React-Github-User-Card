import React from "react";
import User from "../User";

const UserList = ({ users }) => {
  return users.map(user => <User key={user.id} user={user} />);
};

export default UserList;
