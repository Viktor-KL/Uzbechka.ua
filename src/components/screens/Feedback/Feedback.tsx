import { FC } from 'react'

import FeedbackData from 'data/menuData.json'
import styles from './Feedback.module.scss'

import FeedbackContent from './FeedbackContent'
import FeedbackCarousel from './FeedbackCarousel'

const Feedback: FC = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <FeedbackContent />
                    <FeedbackCarousel />
                </div>
            </div>
        </section>
    )
}

export default Feedback;