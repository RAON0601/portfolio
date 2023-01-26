import styles from "./card.module.scss";

type CardProps = {
  header: React.ReactNode;
  body: React.ReactNode;
};

export default function Card({ header, body }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>{header}</div>
      <div className={styles["card-body"]}>{body}</div>
    </div>
  );
}
