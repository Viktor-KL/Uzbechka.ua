import { FC } from "react";
import Image from "next/image";

import aboutData from "data/aboutData.json";
import styles from "./About.module.scss";

const About: FC = () => {
  return (
    <section className={styles.section} id="#about">
      <div className="container">
        <div className={styles.wrapper}>
          <p className={styles.description}>
            {aboutData.firstPart}
            <span>
              <Image
                src="/img/about/img-1.png"
                width={260}
                height={122}
                alt="dish-image"
                className={styles.image}
              />
            </span>
            {aboutData.secondPart}
            <span>
              <Image
                src="/img/about/img-2.png"
                width={260}
                height={122}
                alt="dish-image"
                className={styles.image}
              />
            </span>
            {aboutData.thirdPart}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
