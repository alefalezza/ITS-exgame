import React from "react";
import classes from "./Tags.module.css";

interface TagsProps {
  data: Record<string, string>;
}

export const Tags: React.FC<TagsProps> = ({ data }) => {
  return (
    <div className={classes.tags}>
      {Object.entries(data).map(([key, value]) => (
        <span key={key} className={classes.tag}>
          {key}: {value}
        </span>
      ))}
    </div>
  );
};
