import { FC } from 'react'

import IFooterContacts from 'shared/interfaces/IFooter/IFooterContacts'
import FooterData from 'data/footer.json'
import styles from './Footer.module.scss'

const FooterContacts: FC = () => {
    const { title, links, href}: IFooterContacts = FooterData.contacts;

    return (
        <div className={styles.contacts}>
            <h3 className={styles.title}>{title}</h3>
            {links.map(({text , href}, index) => (
                <ul className={styles.contact_links} key={index}>
                    <li className={styles.links}><a href={href}>{text}</a></li>
                </ul>
            ))}
        </div>
    )
}

export default FooterContacts;