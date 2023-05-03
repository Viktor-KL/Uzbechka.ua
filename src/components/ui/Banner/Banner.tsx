import { FC } from "react";
import Image from "next/image";

import Button from "../Button/Button";

import styles from "./Banner.module.scss";

interface BannerProps {
  title: string;
  descriptionHead: string;
  descriptionFoot: string;
  buttonText: string;

  imageSrc: string;
  imageAlt: string;
  descriptionWrapClass: string;
  width: number;
  height: number;
  descriptionHeadClass?: string;
  descriptionFootClass?: string;
  imgClass?: string;
}

const Banner: FC<BannerProps> = ({
  title,
  descriptionHead,
  descriptionFoot,
  buttonText,
  descriptionHeadClass,
  descriptionFootClass,
  imageSrc,
  imageAlt,
  descriptionWrapClass,
  width,
  height,
  imgClass = "",
}) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={width}
              height={height}
              className={imgClass}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <div className={descriptionWrapClass}>
              <p className={descriptionHeadClass}>{descriptionHead}</p>
              <p className={descriptionFootClass}>{descriptionFoot}</p>
            </div>
            <Button
              type="anchor"
              text={buttonText}
              className="yellow-border-btn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
