import styles from '../BottomLine/BottomLine.module.css';

export const BottomLine = () => {
    return (
        <div className={styles.teamMeetContainer}>
            <div>
                <p className={styles.teamMeetText}>Meet The Team</p>
                <span className={styles.teamMeetLine}></span>
            </div>

            <div>
            <button> &lt; </button>
                <button> &gt; </button>
            </div>
        </div>
    )
}

