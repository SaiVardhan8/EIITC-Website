"use client";

import React, { useState } from "react";

import {
  Menu
  
} from "lucide-react";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
 // const [openSubmenu, setOpenSubmenu] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  // console.log(data);

  const menuItems = [
 
    {
      title: "Contact",
      items: ["Consulting", "Development", "Support", "Training"],
    }

  ];


  const mainMenuItems = ["Home", "Contact"];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-sm">
          <div>Edvenswa</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-300">
              Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            <Link href='/'> EIITC </Link>
            </div>

            {/* Main Menu - Right Aligned */}
            <div className="hidden md:flex items-center space-x-8">
              {mainMenuItems.map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              {/*<button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                Sign In
              </button> */}

              {session ? (
                <Link
                  href="/admin/dashboard"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Dashboard
                </Link>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            {mainMenuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
            <div className="p-4 space-y-2">
              {/* <button className="w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                Sign In
              </button> */}
              {session ? (
                <Link
                  href="/admin/dashboard"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Dashboard
                </Link>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

  


      {/* Main Content */}
      <main className="flex-grow">

      {children}



        
      </main>

      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2025 Edvenswa Tech Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {menuItems.map((menu) => (
                <a
                  key={menu.title}
                  href={`#${menu.title.toLowerCase()}`}
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {menu.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserLayout;
