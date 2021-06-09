
import styles from './styles.module.scss';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <a>Home</a>
                    <a>Posts</a>
                </nav>
            </div>
        </header>
    );
}