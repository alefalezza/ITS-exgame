import classes from "./UserInfo.module.css";

export const UserInfo: React.FC = () => (
  <div className={classes.userInfo}>
    <img
      src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
      alt="User Avatar"
    />
    <p>Mario Rossi</p>
  </div>
);
