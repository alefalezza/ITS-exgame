import { Question, type QuestionProps } from "./Question";

export const Questions: React.FC<{ questions: QuestionProps[] }> = ({
  questions,
}) => {
  return (
    <>
      {questions.map(({ questionText, answers }, index) => (
        <Question key={index} questionText={questionText} answers={answers} />
      ))}
    </>
  );
};
