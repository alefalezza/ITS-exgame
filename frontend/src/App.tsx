import classes from "./App.module.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { PageTitle } from "./components/PageTItle";
import { Questions } from "./components/Questions";
import { Tags } from "./components/Tags";
import { Timer } from "./components/Timer";
import { UserInfo } from "./components/UserInfo";
import { questionsData } from "./mocks/questions";

function App() {
  return (
    <div className={classes.app}>
      <Header>
        <Navigation />
      </Header>

      <div className={classes.body}>
        <UserInfo />

        <PageTitle title="Test di Matematica - Classe 1A" />

        <Tags
          data={{
            date: "12 settembre 2025",
            session: "Prima sessione",
            teacher: "Prof. Bianchi",
          }}
        />

        <Timer />

        <div className={classes.content}>
          <Questions questions={questionsData} />

          <div className={classes.actions}>
            <button className={classes.submit}>Hai terminato? Consegna!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
