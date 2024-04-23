import Link from "next/link";
import React from "react";
import styles from "./Navigate.module.scss";
const Navigate = () => {
  return (
    <div className={styles.links__container}>
      <Link href={"/SWRInfinity"}>SWRInfinity</Link>
      <span className={styles.separator}></span>
      <Link href={"/"}>SimpleSWR</Link>
    </div>
  );
};

export default Navigate;
