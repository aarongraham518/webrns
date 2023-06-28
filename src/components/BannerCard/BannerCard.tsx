import styles from '../BannerCard/BannerCard.module.css';

type BannerCardProps = {
    heading: string,
    paragraph?: string,
    buttonText?: string,
    backgroundColor?: string,
    messageCount?: number,
    isLoggedIn?: boolean
}

export const BannerCard = (props: BannerCardProps) => {
    return (
        <div className={styles[`${props.backgroundColor}`]}>
            {props.heading}
        </div>
    )
}