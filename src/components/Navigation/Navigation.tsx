import styles from './Navigation.module.css';

export const Navigation = () => {

    return (
        <div className={styles.container}>
            <a href="#">
                <span className={styles.logo}>
                <span className={styles.italic_me}>Web</span>
                RNs</span>
            </a>            

            <ul className={styles.navUl}>
                <li>HOME</li>
                <li>SERVICES</li>
                <li>STAFF</li>
                <li>SHOP</li>
                <li>LOCATIONS</li>
                <li>CAREERS</li>
                <li>PATIENTS</li>
                <li>EDUCATION</li>
            </ul>
        </div>
    )
}