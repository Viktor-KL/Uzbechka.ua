import { FC, useState } from "react";
import Link from "next/link";

import Button from "components/ui/Button/Button";

import navData from "data/navData.json";
import styles from "./Header.module.scss";

import { IoIosArrowForward } from "react-icons/io";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const list: INavData[] = navData.navigation;

  const togleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          <div className={styles.btnPart}>
            <Button
              type="anchor"
              text="Меню"
              href="#menu"
              className="ghost-btn"
              customClass={styles.button}
            />
            <button onClick={togleMenu}>
              {isOpen ? (
                <RxCross2 className={styles.close} />
              ) : (
                <RxHamburgerMenu className={styles.open} />
              )}
            </button>
          </div>
        </nav>
        <div className={styles.line}></div>
      </div>
      {isOpen && (
        <div className={styles.mobileLinksWrap}>
          {list.map((item, key) => (
            <Link key={key} href={item.href} className={styles.mobileLink}>
              {item.text} <IoIosArrowForward />
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
