import styles from './TypingIndicator.module.css';

function TypingIndicator(): JSX.Element {
  return (
    <div className={styles.container} aria-live="polite" aria-label="Assistant is typing">
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
}

export default TypingIndicator;
