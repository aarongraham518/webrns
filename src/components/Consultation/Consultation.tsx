import styles from './Consultation.module.css';

export const Consultation = () => {

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.mainText}>Get Free Initial Consultation, Call <span className={styles.mainTextNumber}>(518) 275-8230</span></p>
                <p className={styles.subText}>Fees are an estimate only and may be more depending on your situation</p>
            </div>
            <button className={styles.consultationButton}>GET FREE CONSULTATION</button>
        </div>
    )
}