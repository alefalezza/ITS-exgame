import classes from "./App.module.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Subscription } from "./pages/Subscription";

function App() {
  return (
    <div className={classes.app}>
      <Header>
        <Navigation />
      </Header>

      <main className={classes.body}>
        <Subscription />
      </main>
    </div>
  );
}

export default App;
