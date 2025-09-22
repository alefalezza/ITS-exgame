import type React from "react";
import classes from "./Timer.module.css";

export const Timer: React.FC = () => (
  <div className={classes.timer}>
    <span>Tempo rimasto:</span>
    <div className={classes.time}>00:25:00</div>
  </div>
);
