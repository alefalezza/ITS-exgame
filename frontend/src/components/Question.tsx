import classes from "./Question.module.css";

type Answer = {
  id: string;
  text: string;
};

export type QuestionProps = {
  questionText: string;
  answers: Answer[];
};

const QuestionFunctions: React.FC = () => (
  <div className={classes.functions}>
    <button>Chiedi al docente</button>
    <button>Copia da un compagno</button>
    <button>Chiedi l'aiuto da casa</button>
    <button>Tira a indovinare</button>
  </div>
);

export const Question: React.FC<QuestionProps> = ({
  questionText,
  answers,
}) => {
  return (
    <div className={classes.question}>
      <h3>{questionText}</h3>
      <ul>
        {answers.map((answer) => (
          <li key={answer.id}>
            <input type="radio" id={answer.id} name="answer" />
            <label htmlFor={answer.id}>{answer.text}</label>
          </li>
        ))}
      </ul>
      <QuestionFunctions />
    </div>
  );
};
