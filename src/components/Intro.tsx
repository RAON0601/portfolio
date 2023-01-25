import styles from "./intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className="container">
        <h1 className={styles.name}>김정민</h1>
        <h2 className={styles.position}>웹 개발자 포트폴리오</h2>

        <hr className={styles.line} />

        <p className={styles["intro-detail"]}>
          포트폴리오 페이지를 방문해주셔서 감사합니다 !
        </p>

        <p className={styles["intro-detail"]}>
          저는 기본기를 중요시하는 사람입니다
        </p>

        <p className={styles["intro-detail"]}>
          최근에는 UI/UX와 사용자 interaction에 관심을 가지고 공부하고 있습니다.
        </p>

        <div className={styles["btn-wrapper"]}>
          <button className={`${styles.btn} ${styles["btn-more"]}`}>
            더 알아보기 ↓
          </button>
        </div>
      </div>
    </section>
  );
}
