import classes from "./Navigation.module.css";

export const Navigation: React.FC = () => (
  <nav>
    <ul>
      <li>
        <a href="">Dashboard</a>
      </li>
      <li>
        <a href="">Esami</a>
      </li>
    </ul>
    <ul className={classes.user}>
      <li>
        <a href="">Ale Falezza</a>
      </li>
      <li>
        <a href="">Logout</a>
      </li>
    </ul>
  </nav>
);
