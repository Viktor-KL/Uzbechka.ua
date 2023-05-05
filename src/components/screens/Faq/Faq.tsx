import { FC } from "react";

import FaqData from "data/faqData.json";
import IFaq from "shared/interfaces/IFaq/IFaq";
import IFaqSection from "shared/interfaces/IFaq/IFaqSection";

import FaqContent from "./FaqContent";
import FaqList from "./FaqList";

import styles from "./Faq.module.scss";

const Faq: FC = () => {
  const {section, list}: IFaq = FaqData;
  const {title, description, buttonText}: IFaqSection = section;

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <div className={styles.wrapper}>
          <FaqContent title={title} description={description} buttonText={buttonText}  />
          <FaqList list={list} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
