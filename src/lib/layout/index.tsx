import type { ReactNode } from 'react';
import { cookies } from 'next/headers';

import { SESSION_COOKIE_NAME } from '../components/constants/session';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type LayoutProps = {
  children: ReactNode;
}; 

const Layout = ({ children }: LayoutProps) => {

  const session = cookies().get(SESSION_COOKIE_NAME)?.value || null;
  return (
    <div className="flex min-h-screen flex-col items-center relative overflow-x-hidden">
    <Header session={session}/>
    <main className="wrapper w-[90%] mt-[70px] md:mt-[106px] lg:mt-[120px] max-w-[1440px] min-h-screen relative mx-auto p-0">{children}</main>
    <ToastContainer />
    </div>
  );
};

export default Layout;
