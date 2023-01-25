import styles from "./section.module.scss";
import SectionTitle from "./SectionTitle";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Section({ id, title, children, style }: SectionProps) {
  return (
    <section id={id} style={{ ...style }}>
      <div className="container">
        <SectionTitle title={title} />
        <div className={styles["content-wrap"]}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </section>
  );
}
