import { FC } from "react";

import Button from "components/ui/Button/Button";

import IFaqSection from "shared/interfaces/IFaq/IFaqSection";
import styles from "./Faq.module.scss";

const FaqContent: FC<IFaqSection> = ({ title, description, buttonText }) => {

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Button type="button" text={buttonText} className="yellow-border-btn"/>
    </div>
  );
};

export default FaqContent;
