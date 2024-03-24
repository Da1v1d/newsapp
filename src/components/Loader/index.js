import styles from "./style.module.css";

export const Loader = () => {
  return (
    <div className={styles.circle_loading}>
      <div className={styles.circle}></div>
    </div>
  );
};
