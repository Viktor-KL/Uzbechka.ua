import { FC } from "react";
import Image from "next/image";

import styles from "./Offer.module.scss";
import OfferContent from "./OfferContent";

const Offer: FC = () => {
  return (
    <section className={styles.section} id="offer">
      <div className="container">
        <div className={styles.wrapper}>
          <OfferContent />
          <div className={styles.image}></div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
