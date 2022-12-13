import type { ReactNode } from 'react';

import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';
import styles from './AppLayout.module.scss';

type IAppLayoutProps = {
  children: ReactNode;
};

const AppLayout = (props: IAppLayoutProps) => (
  <div className={`${styles.appWrapper} w-full antialiased`}>
    <AppHeader />
    <main className="flex-1">{props.children}</main>
    <AppFooter />
  </div>
);

export { AppLayout };
