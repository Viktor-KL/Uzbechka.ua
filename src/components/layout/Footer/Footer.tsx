import { FC } from "react";

import FooterData from "data/footer.json";
import styles from "./Footer.module.scss";
import Link from "next/link";

import FooterAddress from "./FooterAddress";
import FooterNav from "./FooterNav";
import FooterContacts from "./FooterContacts";
import FooterMap from "./FooterMap";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.head}>
          <Link href="/" className={styles.logo}>
            Uzbechka.<span className={styles.logoPart}>ua</span>
          </Link>
        </div>
        <div className={styles.wrapper}>
          <FooterAddress />
          <FooterNav />
          <FooterContacts />
          <FooterMap />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
