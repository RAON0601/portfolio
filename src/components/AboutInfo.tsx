import styles from "./aboutInfo.module.scss";

type AboutInfoProps = {
  icon: React.ReactNode;
  label: string;
  field: string;
};

export default function AboutInfo({ icon, label, field }: AboutInfoProps) {
  return (
    <div className={styles.info}>
      <div>{icon}</div>
      <div>
        <div className={styles.label}>{label}</div>
        <div className={styles.field}>{field}</div>
      </div>
    </div>
  );
}
