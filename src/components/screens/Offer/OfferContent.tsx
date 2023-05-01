import { FC } from "react";
import Image from "next/image";

import Button from "components/ui/Button/Button";

import offerData from "data/offerData.json";
import styles from "./Offer.module.scss";

const OfferContent: FC = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{offerData.title}</h1>
      <p className={styles.description}>{offerData.description}</p>
      <div className={styles.btnWrapper}>
        <Button
          type="anchor"
          text={offerData.buttonText}
          href="#menu"
          className="yellow-btn"
          customClass={styles.button}
        />
        <Button
          type="anchor"
          href="#menu"
          text={
            <Image
              src="/img/offer/img-3.svg"
              alt="map-icon"
              className={styles.mapIcon}
              width={32}
              height={32}
            />
          }
          className="ghost-btn"
          customClass={styles.mapButton}
        />
      </div>
    </div>
  );
};

export default OfferContent;
