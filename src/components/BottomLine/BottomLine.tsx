import styles from '../BottomLine/BottomLine.module.css';

export const BottomLine = () => {
    return (
        <div className={styles.teamMeetContainer}>
            <div>
                <p className={styles.teamMeetText}>Meet The Team</p>
                <span className={styles.teamMeetLine}></span>
            </div>

            <div>
                <button className={styles.teamButtons}> &lt; </button>
                <button className={styles.teamButtons}> &gt; </button>
            </div>
        </div>
    )
}

