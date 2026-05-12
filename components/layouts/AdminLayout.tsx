'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

import {
  Users,
  Menu,
  UserCircle,
  LogOut,
  Home,
  Loader2,
  Briefcase,
  PanelTop,
  File,
} from 'lucide-react';

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  roles?: string[]; // Add roles to specify who can see this menu item
}

const menuItems: MenuItem[] = [
  {
    title: 'Users',
    path: '/admin/users',
    icon: <Users className="w-5 h-5" />,
    roles: ['hr','admin'],
  },
  {
    title: 'Blog Posts',
    path: '/Admin-blog-panel/',
    icon: <PanelTop className="w-5 h-5" />,
    roles: ['hr', 'cms user', 'admin'],
  },
  {
    title: 'Job Posts',
    path: '/Admin-jobs-panel/',
    icon: <Briefcase className="w-5 h-5" />,
    roles: ['hr', 'recruiter'],
  },
  {
    title: 'Investor Docs',
    path: '/admin/Investors',
    icon: <File className="w-5 h-5" />,
    roles: ['hr', 'investor'],
  },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/login');
  };
  
  // Filter menu items based on user role
  const filteredMenuItems = menuItems.filter((item) => {
    if (!item.roles) return true;
    return session?.user?.role && item.roles.includes(session.user.role);
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold">Edvenswa</h1>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 rounded-lg hover:bg-gray-100">
              <Home className="w-5 h-5" />
            </Link>

            <div className="relative">
              <div
                className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100"
                onMouseEnter={() => setShowUserDropdown(true)}
                onMouseLeave={() => setShowUserDropdown(false)}
              >
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium">
                    {session?.user?.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {session?.user?.email}
                  </p>
                </div>
                <div className="p-1 rounded-full bg-gray-100">
                  <UserCircle className="w-6 h-6" />
                </div>

                {showUserDropdown && (
                  <div className="absolute right-0 top-full mt-1 py-2 w-48 bg-white rounded-lg shadow-xl z-50">
                    <Link
                      href="/admin/profile"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center gap-2"
                    >
                      <UserCircle className="w-4 h-4" />
                      Edit Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? 'w-64' : 'w-16'
          } bg-white shadow-sm transition-all duration-300 min-h-[calc(100vh-64px)]`}
        >
          <nav className="p-4">
            {status === 'loading' ? (
              <div className="flex items-center justify-center min-h-[200px]">
                <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
              </div>
            ) : (
              <ul className="space-y-2">
                {filteredMenuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 ${
                        pathname === item.path ? 'bg-blue-50 text-blue-600' : ''
                      }`}
                    >
                      {item.icon}
                      {isSidebarOpen && (
                        <span className="font-medium">{item.title}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {status === 'loading' ? (
            <div className="flex items-center justify-center min-h-[300px]">
              <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
