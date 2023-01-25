import styles from "./sectionTitle.module.scss";
import { AiOutlineLink } from "react-icons/ai";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className={styles["title-wrapper"]}>
      <AiOutlineLink size={70} className={styles["link-icon"]} />
      <h5 className={styles["title"]}>{title}</h5>
    </div>
  );
}
