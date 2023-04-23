import { PropsWithChildren } from 'react';
import { Header } from './header/Header';

type LayoutProps = PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
