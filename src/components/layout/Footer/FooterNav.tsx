import { FC } from "react";

import IFooterNav from "shared/interfaces/IFooter/IFooterNav";
import FooterData from "data/footer.json";
import styles from "./Footer.module.scss";

const FooterNav: FC = () => {
  const { title, links_1, links_2, href }: IFooterNav = FooterData.navigation;

  return (
    <div className={styles.nav}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.links_wrapper}>
        {links_1.map(({ link, href }, index) => (
          <div key={index}>
            <a className={styles.links} href={href}>
              {link}
            </a>
          </div>
        ))}
        {links_2.map(({ link, href }, index) => (
          <div key={index}>
            <a className={styles.links} href={href}>
              {link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterNav;
