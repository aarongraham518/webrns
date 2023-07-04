import styles from '../TeamCard/TeamCard.module.css';
type TeamProps = {
    image: string,
    name: string,
    title: string
}

export const TeamCard = (props: TeamProps) => {

    return (
        <div className={styles.teamCardWrapper}>
            <img src={props.image} className={styles.imageSpec}/>
            <div className={styles.nameTitleContainer}>
                <span className={styles.name}>{props.name}</span>
                <span className={styles.title}>{props.title}</span>
            </div>
        </div>
    )
}