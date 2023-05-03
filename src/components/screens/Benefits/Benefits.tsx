import { FC } from "react";

import IBenefits from "shared/interfaces/IBenefitsData";
import BenefitsData from "data/benefitsData.json";
import styles from "./Benefits.module.scss";

const Benefits: FC = () => {
    const list: IBenefits[] = BenefitsData.benefits;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
            {list.map((item, key) => (
                <div className={styles.block} key={key}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.lines}>- — — — -</p>
                    <p className={styles.description}>{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
