import { FC } from "react";
import Image from "next/image";

import menuData from "data/menuData.json";
import styles from "./Menu.module.scss";

const Menu: FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <Image
            src="/img/menu/img-1.png"
            width={500}
            height={550}
            alt="yard"
            className={styles.yardImage}
          />

          <div className={styles.rightPart}>
            <Image
              src="/img/menu/img-2.png"
              width={700}
              height={300}
              alt="interior"
              className={styles.interiorImage}
            />
            <div className={styles.infoWrapper}>
              <p>{menuData.description}</p>
              <p>{menuData.descriptionMenu}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
