import styles from '../NewsCard/NewsCard.module.css';

type NewsCardProps = {
    date: string,
    image: string,
    heading: string,
    paragraph: string,
    author: string,
    category: string
}

export const NewsCard = (props: NewsCardProps) => {

    return (
        <div className={styles.NewsCardWrapper}>
            <span className={styles.date}>{props.date}</span>     

            <div className={styles.imageContainer}>
                <img src={props.image} className={styles.newsImage}/>
            </div>

            <h2 className={styles.NewHeading}>{props.heading}</h2>

            <p className={styles.NewsText}>
                {props.paragraph}
            </p>

            <div className={styles.authorCatContainer}>
                <span>{props.author}</span> | <span>{props.category}</span>
            </div>
        </div>
    )
}