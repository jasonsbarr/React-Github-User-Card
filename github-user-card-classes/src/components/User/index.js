import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <p>
        Github User:{" "}
        <a
          href={user.resourcePath}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.login}
        </a>
      </p>
      <p>
        <img src={user.avatarUrl} alt={user.login} />
      </p>
      <p>Name: {user.name}</p>
      <p>Company: {user.company || "None"}</p>
      <p>Bio: {user.bio || "None"}</p>
    </div>
  );
};

export default User;
