'use client'

import React, { useEffect, useRef, useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';
import Navlink from './Navlink';
import { Icons } from '../icons';
import { Logout } from '@/actions/auth';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

interface LinkItemProps {
  module: string;
  items: Array<{
    name: string;
    icon: React.ReactNode;
    href: string;
  }>;
}

const LinkItems: Array<LinkItemProps> = [
  {
    module: 'Overview',
    items: [
      { name: 'Dashboard', icon: <Icons.dashboard />, href: '/admin/dashboard' },
      { name: 'Outlet', icon: <Icons.outlet />, href: '/admin/outlet' },
      { name: 'Report', icon: <Icons.report />, href: '/admin/report' },
    ],
  },
  {
    module: 'Items',
    items: [
      { name: 'Product', icon: <Icons.item />, href: '/admin/product' },
      { name: 'Categories', icon: <Icons.categories />, href: '/admin/categories' },
      { name: 'Tags', icon: <Icons.tags />, href: '/admin/tags' },
    ],
  },
  {
    module: 'Settings',
    items: [
      { name: 'Settings', icon: <Icons.settings />, href: '/admin/settings' },
    ],
  },
  {
    module: 'Account',
    items: [
      { name: 'Profile', icon: <Icons.profile />, href: '/admin/profile' },
      { name: 'Logout', icon: <Icons.logout />, href: '/admin/logout' },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const router = useRouter();
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage?.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const logout = async () => {
    await Logout();
    localStorage.removeItem('vendor');
    router.push('/admin/login');
  }

  return (
    <aside
      ref={sidebar}
      className={`z-9999 absolute left-0 top-0 flex h-screen w-[300px] flex-col overflow-y-hidden bg-admin duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } py-10`}
    >
      <div className="py-5.5 lg:py-6.5 flex items-center justify-between gap-2 px-6">
        <Link href="/admin/dashboard">
          <Image src={'/logo.png'} alt="Logo" width={300} height={300} priority={true} />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block"
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto text-white duration-300 ease-linear">
        <nav className="mt-5 p-4 lg:mt-9 lg:px-6">
          {LinkItems.map((item, index) => (
            <div key={index}>
              <h1>{item.module}</h1>
              <div className='my-6 pl-3'>
                {item.items.map((item, index) => (
                  <Navlink
                    onClick={item.name === 'Logout' ? logout : () => { }}
                    key={index}
                    href={item.href}
                    label={item.name}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
