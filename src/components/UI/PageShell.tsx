import { type ReactNode } from 'react';
import styles from '../../styles/Layout.module.css';

export const PageShell = ({ children }: { children: ReactNode }) => {
  return <main className={styles.pageShell}>{children}</main>;
};
