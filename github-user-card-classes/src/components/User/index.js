/** @jsx jsx */
import { jsx } from "@emotion/core";
import styles from "./styles";

const User = ({ user }) => {
  return (
    <div css={styles}>
      <div className="user-container">
        <div className="user-img">
          <img src={user.avatarUrl} alt={user.login} />
        </div>
        <div className="user-info">
          <p>
            <span>Name:</span> {user.name} (
            <a
              href={user.resourcePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{user.login}
            </a>
            )
          </p>
          <p>
            <span>Company:</span> {user.company || "None"}
          </p>
          <p>
            <span>Bio:</span> {user.bio || "None"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
