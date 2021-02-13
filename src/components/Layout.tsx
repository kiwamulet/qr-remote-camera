import React from "react";
import styles from "./Layout.css";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} className={styles.base} />
);

export { Layout };
