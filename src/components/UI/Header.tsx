import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
}

function Header({ title, actionLabel, onAction }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {actionLabel && onAction ? (
        <button type="button" className={styles.action} onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </header>
  );
}

export default Header;
