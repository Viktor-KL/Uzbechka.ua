import { FC } from 'react'

import IFooterAddress from 'shared/interfaces/IFooter/IFooterAddress'
import FooterData from 'data/footer.json'
import styles from './Footer.module.scss'

const FooterAddress: FC = () => {
    const {title, description}: IFooterAddress = FooterData.address;

    return (
        <div className={styles.address}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default FooterAddress;