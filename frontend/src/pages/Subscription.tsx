import classes from "../App.module.css";
import { PageTitle } from "../components/PageTItle";
import { Questions } from "../components/Questions";
import { Tags } from "../components/Tags";
import { Timer } from "../components/Timer";
import { UserInfo } from "../components/UserInfo";
import { questionsData } from "../mocks/questions";

export const Subscription: React.FC = () => (
  <>
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
  </>
);
