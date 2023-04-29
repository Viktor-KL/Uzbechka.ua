import { FC } from "react";
import Link from "next/link";

import navData from "data/navData.json";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const list: INavData[] = navData.navigation;

  return (
    <header className={styles.wrapper} id="header">
      <div className="container">
        <nav className={styles.navigation}>
          <Link href="/" className={styles.logo}>
            Uzbechka.<span className={styles.logoPart}>ua</span>
          </Link>
          <div className={styles.links}>
            {list.map((item, key) => (
              <a key={key} href={item.href}>
                {item.text}
              </a>
            ))}
          </div>
          <a href="" className={styles.btn}>
            Меню
          </a>
        </nav>
        <div className={styles.line}></div>
      </div>
    </header>
  );
};

export default Header;
