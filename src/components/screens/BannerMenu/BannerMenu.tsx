import { FC } from 'react'

import Banner from 'components/ui/Banner/Banner'
import bannerData from 'data/bannerData.json'
import styles from './BannerMenu.module.scss'

const BannerMenu: FC = () => {
    return (
        <Banner 
            imageSrc={bannerData.menu.imgSrc}
            imageAlt={bannerData.menu.imgAlt}
            width={bannerData.menu.imgWidth}
            height={bannerData.menu.imgHeight}
            imgClass={bannerData.menu.imgClass}
            title={bannerData.menu.title}
            descriptionHead={bannerData.menu.descriptionHead}
            descriptionFoot={bannerData.menu.descriptionFoot}
            buttonText={bannerData.menu.buttonText}
            descriptionWrapClass={styles.descriptionWrapper}
            descriptionFootClass={styles.descriptionFoot}
            descriptionHeadClass={styles.descriptionHead}
        />
    )
}

export default BannerMenu;