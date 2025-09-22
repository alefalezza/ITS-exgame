import classes from "./PageTitle.module.css";

type PageTitleProps = {
  title: string;
  backlink?: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({ title, backlink }) => {
  return (
    <div className={classes.title}>
      {backlink && (
        <a href={backlink} className={classes.back}>
          indietro
        </a>
      )}
      <h1>{title}</h1>
    </div>
  );
};
