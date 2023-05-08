import { FC } from 'react'

import IFeedbackContent from 'shared/interfaces/IFeedback/IFeedbackContent'
import FeedbackData from 'data/Feedback.json'
import styles from './Feedback.module.scss'
import Button from 'components/ui/Button/Button'

const FeedbackContent: FC = () => {
    const { title, description, buttonText }: IFeedbackContent = FeedbackData.content;

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <Button type='button' text={buttonText} className='ghost-btn' customClass={styles.button}/>
        </div>
    )
}

export default FeedbackContent;