import { FC, useRef } from "react";
import Image from "next/image";

import IFaqItem from "shared/interfaces/IFaq/IFaqItem";
import styles from "./Faq.module.scss";

interface Props extends IFaqItem {
  onToggle: () => void;
  active: boolean;
}

const FaqItem: FC<Props> = ({ question, answer, onToggle, active }) => {
  const answerWrapper = useRef<HTMLDivElement>(null);

  return (
    <li className={styles.item}>
      <button
        type="button"
        className={`${styles.button} ${active ? styles.button_active : ""}`}
        onClick={onToggle}
      >
        <p className={styles.question}>
          {question}{" "}
          <Image
            src="/img/faq/arrow-icon.svg"
            width={15}
            height={30}
            alt="arrow-icon"
            className={`${styles.arrow} ${active ? styles.arrow_active : ''}`}
          />
        </p>
      </button>
      <div
        ref={answerWrapper}
        className={`${styles.answer_wrapper} ${active ? styles.answer_wrapper_active : ''}`}
      >
        <div className={styles.answer}>{answer}</div>
      </div>
    </li>
  );
};

export default FaqItem;
