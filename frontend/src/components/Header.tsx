import type { PropsWithChildren } from "react";
import Logo from "../assets/ExGame logo.svg";
import classes from "./Header.module.css";

export const Header: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={classes.header}>
    <img src={Logo} alt="ExGame" />
    {children}
    {/* Questa prop (children) consente di inserire componenti figli, e questo è un commento in jsx */}
  </div>
);
