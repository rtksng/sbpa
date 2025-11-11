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
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 text-zinc-700"
          aria-label="Toggle menu"
        >
          {sidebarOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search businesses, reports..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Search */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-zinc-100 text-zinc-700"
            aria-label="Search"
          >
            <FiSearch className="h-5 w-5" />
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg hover:bg-zinc-100 text-zinc-700"
              aria-label="Notifications"
            >
              <FiBell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-orange-500 rounded-full border-2 border-white"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-zinc-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-zinc-200">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-zinc-50 cursor-pointer">
                    <p className="text-sm text-zinc-900">
                      New business profile added
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">
                      2 minutes ago
                    </p>
                  </div>
                  <div className="px-4 py-3 hover:bg-zinc-50 cursor-pointer">
                    <p className="text-sm text-zinc-900">
                      Revenue report generated
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">
                      1 hour ago
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

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

