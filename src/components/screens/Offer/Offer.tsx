import { FC } from "react";
import Image from "next/image";

import styles from './Offer.module.scss'
import OfferContent from "./OfferContent";

const Offer: FC = () => {
    return (
        <section className={styles.section} id="offer">
            <div className="container">
                <div className={styles.wrapper}>
                    <OfferContent />
                    <Image src='/img/offer/img-2.png' width={486} height={486} alt='dish-img'/>
                </div>
            </div>
        </section>
    )
}

export default Offer;