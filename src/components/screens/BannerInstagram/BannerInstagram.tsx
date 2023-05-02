import { FC } from 'react'

import Banner from 'components/ui/Banner/Banner'
import bannerData from 'data/bannerData.json'
import styles from './BannerInstagram.module.scss'

const BannerInstagram: FC = () => {
    return (
        <Banner 
            imageSrc={bannerData.instagram.imgSrc}
            imageAlt={bannerData.instagram.imgAlt}
            width={bannerData.instagram.imgWidth}
            height={bannerData.instagram.imgHeight}
            imgClass={bannerData.instagram.imgClass}
            title={bannerData.instagram.title}
            descriptionHead={bannerData.instagram.descriptionHead}
            descriptionFoot={bannerData.instagram.descriptionFoot}
            buttonText={bannerData.instagram.buttonText}
            descriptionWrapClass={styles.descriptionWrapper}
            descriptionHeadClass={styles.descriptionHead}
            descriptionFootClass={styles.descriptionFoot}
        />
    )
}

export default BannerInstagram;