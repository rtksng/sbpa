'use client';

import { useState, useEffect, useRef } from 'react';
import {
  FiSearch,
  FiBell,
  FiMenu,
  FiX,
  FiUser,
  FiLogOut,
  FiSettings,
} from 'react-icons/fi';

interface HeaderProps {
  onMenuClick?: () => void;
  sidebarOpen?: boolean;
}

export default function Header({ onMenuClick, sidebarOpen }: HeaderProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setShowUserMenu(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 right-0 z-30 h-16 w-full lg:w-[calc(100%-16rem)] lg:left-64 border-b border-zinc-200 bg-white">
      <div className="flex h-full items-center justify-end px-4 lg:px-6">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 text-zinc-700"
          aria-label="Toggle menu"
        >
          {sidebarOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>


        {/* Right Side Actions */}
        <div className="flex items-center  gap-2">
        

         

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-100"
              aria-label="User menu"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                JD
              </div>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-zinc-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-zinc-200">
                  <p className="text-sm font-semibold text-zinc-900">
                    John Doe
                  </p>
                  <p className="text-xs text-zinc-500">
                    john.doe@example.com
                  </p>
                </div>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">
                  <FiUser className="h-4 w-4" />
                  Profile
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">
                  <FiSettings className="h-4 w-4" />
                  Settings
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-zinc-50">
                  <FiLogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

