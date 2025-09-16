import classes from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <img src={Logo} alt="ExGame" />
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
      </div>
      <div className={classes.body}>Body</div>
    </div>
  );
}

export default App;
