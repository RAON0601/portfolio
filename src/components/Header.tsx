import styles from "@/components/header.module.scss";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.navigation}`}>
        <Link href="/" className={styles["brand-name"]}>
          KJM Protfolio
        </Link>
        <button
          className={styles.hamburger}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <GiHamburgerMenu fill="white" />
        </button>
        <div
          className={
            isNavExpanded
              ? `${styles["navigation-menu"]} ${styles.expanded}`
              : styles["navigation-menu"]
          }
        >
          <ul>
            <li>
              <Link href="/#About">About Me</Link>
            </li>
            <li>
              <Link href="/#Skills">Skills</Link>
            </li>
            <li>
              <Link href="/#Archiving">Archiving</Link>
            </li>
            <li>
              <Link href="/#Projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
