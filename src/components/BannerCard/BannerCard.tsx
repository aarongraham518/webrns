import styles from '../BannerCard/BannerCard.module.css';

type BannerCardProps = {
    heading: string,
    paragraph: string,
    buttonText?: string,
    backgroundColor?: string,
    messageCount?: number,
    isLoggedIn?: boolean
}

export const BannerCard = (props: BannerCardProps) => {
    return (
        <div className={styles[`${props.backgroundColor}`]}>
            <div className={styles.bannerWrapper}>
                <h2 className={styles.headingSpec}>{props.heading}</h2>
                <p className={styles.paragraphSpec}>{props.paragraph}</p>
                <button className={styles.buttonSpec}>{props.buttonText}</button>
            </div>
        </div>

    )
}