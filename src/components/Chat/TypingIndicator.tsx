import styles from './TypingIndicator.module.css';

function TypingIndicator() {
  return (
    <div className={styles.row}>
      <div className={styles.indicator}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default TypingIndicator;
