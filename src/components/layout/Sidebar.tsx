'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  FiLayout,
  FiBarChart2,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiFileText,
  FiTrendingUp,
  FiPieChart,
  FiChevronDown,
  FiChevronRight,
  FiBriefcase,
} from 'react-icons/fi';

interface NavChild {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
}

interface NavItem {
  name: string;
  href?: string;
  icon: React.ReactNode;
  children?: NavChild[];
}

const navigation: NavItem[] = [
  {
    name: 'Our Business',
    icon: <FiLayout />,
    children: [
      { name: 'Overview', href: '/business/general-presentation' },
      { name: 'Organization', href: '/business/company-organization' },
      // { name: 'Financial Plan', href: '/business/key-financial-information' },
      { name: 'Project Margin', href: '/business/project-financials' },
    ]
  },
  {
    name: 'Sales & HR',
    icon: <FiUsers />,
    children: [
      { name: 'Sales', href: '/sales-and-hr/sales' },
      {
        name: 'HR',
        children: [
          { name: 'Recruitment', href: '/sales-and-hr/human-resources/recruitment-activity' },
          { name: 'Policies & Productivity', href: '/sales-and-hr/human-resources/hr-policy' },
          { name: 'Compensation', href: '/sales-and-hr/human-resources/compensation-policy' },
          { name: 'Staff Analysis', href: '/sales-and-hr/human-resources/staff-analysis' },

        ],
      },
    ],
  },
  {
    name: 'Finance',
    icon: <FiBriefcase />,
    children: [
      { name: 'Overview', href: '/finance-department/presentation-and-organization' },
      { name: 'Auditors & CPA', href: '/finance-department/auditors-and-external-cpa' },
      { name: 'Reporting & Calendar', href: '/finance-department/financial-reporting-and-financial-calendar' },
      { name: 'FPP Monitoring', href: '/finance-department/monitoring-procedure-fixed-price-contracts' },
      { name: 'Sales Admin', href: '/finance-department/sales-administration-process' },
      { name: 'Credit & Payments', href: '/finance-department/client-credit-control-and-payment-terms' },
    ]
  },
  
  {
    name: 'Information Systems',
    icon: <FiSettings />,
    children: [
      { name: 'Overview', href: '/information-systems/presentation-and-organization' },
      { name: 'Tools & Infrastructure', href: '/information-systems/it-tools-and-infrastructure' },
    ]
  },
  
  {
    name: 'Financials',
    icon: <FiBarChart2 />,
    children: [
      { name: 'P&L', href: '/financials/pl-analysis' },
      { name: 'Balance Sheet', href: '/financials/balance-sheet-analysis' },
    ]
  },
  
  {
    name: 'Legal & Tax',
    icon: <FiFileText />,
    children: [
      { name: 'Governance', href: '/legal-and-tax/legal-structure-and-governance' },
      { name: 'Litigation & Risk', href: '/legal-and-tax/litigations-and-risk-management' },
      { name: 'IP', href: '/legal-and-tax/intellectual-property' },
      { name: 'Tax', href: '/legal-and-tax/tax' },
      { name: 'Leases', href: '/legal-and-tax/leases' },
    ]
  }
  
];

interface SidebarProps {
  onNavClick?: () => void;
}

export default function Sidebar({ onNavClick }: SidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Business and Organization']);
  const [isAnimating, setIsAnimating] = useState<Set<string>>(new Set());

  const toggleExpand = (itemName: string) => {
    const isExpanded = expandedItems.includes(itemName);
    
    if (isExpanded) {
      // Start exit animation
      setIsAnimating((prev) => new Set(prev).add(itemName));
      setTimeout(() => {
        setExpandedItems((prev) => prev.filter((name) => name !== itemName));
        setIsAnimating((prev) => {
          const next = new Set(prev);
          next.delete(itemName);
          return next;
        });
      }, 250);
    } else {
      // Add to expanded items immediately for enter animation
      setExpandedItems((prev) => [...prev, itemName]);
    }
  };

  const isActive = (href?: string, children?: NavChild[]) => {
    if (href) return pathname === href;
    if (children) {
      return children.some((child) => {
        if (child.href) return pathname === child.href;
        if (child.children) return child.children.some((grandchild) => pathname === grandchild.href);
        return false;
      });
    }
    return false;
  };

  const isChildActive = (children?: NavChild[]) => {
    if (!children) return false;
    return children.some((child) => {
      if (child.href) return pathname === child.href;
      if (child.children) return child.children.some((grandchild) => pathname === grandchild.href);
      return false;
    });
  };

  const isGrandchildActive = (grandchildren?: { name: string; href: string }[]) => {
    if (!grandchildren) return false;
    return grandchildren.some((grandchild) => pathname === grandchild.href);
  };

  return (
    <aside className="h-screen w-64 border-r border-zinc-200 bg-white">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-center border-b border-zinc-200 px-6">
          <Image
            src="/logo/logo.svg"
            alt="Logo"
            width={140}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto scrollbar-custom">
          {navigation.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedItems.includes(item.name);
            const active = isActive(item.href, item.children);
            const childActive = isChildActive(item.children);

            return (
              <div key={item.name}>
                {hasChildren ? (
                  <>
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className={`w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        active || childActive
                          ? 'bg-orange-50 text-orange-700'
                          : 'text-zinc-700 hover:bg-zinc-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                      {isExpanded ? (
                        <FiChevronDown className="text-sm transition-transform duration-300" />
                      ) : (
                        <FiChevronRight className="text-sm transition-transform duration-300" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className={`ml-4 mt-1 space-y-1 ${isAnimating.has(item.name) ? 'submenu-exit' : 'submenu-enter'}`}>
                        {item.children!.map((child, childIndex) => {
                          const hasGrandchildren = child.children && child.children.length > 0;
                          const childKey = `${item.name}-${child.name}-${childIndex}`;
                          const isChildExpanded = expandedItems.includes(childKey);
                          const isChildLinkActive = child.href && pathname === child.href;
                          const hasActiveGrandchild = isGrandchildActive(child.children);

                          if (hasGrandchildren) {
                            return (
                              <div key={childKey} className="submenu-item" style={{ '--index': childIndex } as React.CSSProperties}>
                                <button
                                  onClick={() => {
                                    const isChildExpanded = expandedItems.includes(childKey);
                                    if (isChildExpanded) {
                                      setIsAnimating((prev) => new Set(prev).add(childKey));
                                      setTimeout(() => {
                                        setExpandedItems((prev) => prev.filter((name) => name !== childKey));
                                        setIsAnimating((prev) => {
                                          const next = new Set(prev);
                                          next.delete(childKey);
                                          return next;
                                        });
                                      }, 250);
                                    } else {
                                      setExpandedItems((prev) => [...prev, childKey]);
                                    }
                                  }}
                                  className={`w-full flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                                    hasActiveGrandchild
                                      ? 'bg-orange-50 text-orange-700'
                                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                                  }`}
                                >
                                  <span>{child.name}</span>
                                  {isChildExpanded ? (
                                    <FiChevronDown className="text-xs transition-transform duration-300" />
                                  ) : (
                                    <FiChevronRight className="text-xs transition-transform duration-300" />
                                  )}
                                </button>
                                {isChildExpanded && (
                                  <div className={`ml-4 mt-1 space-y-1 ${isAnimating.has(childKey) ? 'submenu-exit' : 'submenu-enter'}`}>
                                    {child.children!.map((grandchild, grandchildIndex) => {
                                      const isGrandchildLinkActive = pathname === grandchild.href;
                                      return (
                                        <Link
                                          key={grandchild.href}
                                          href={grandchild.href}
                                          onClick={onNavClick}
                                          className={`block rounded-lg px-3 py-1.5 text-xs font-medium transition-colors submenu-item ${
                                            isGrandchildLinkActive
                                              ? 'bg-orange-50 text-orange-700 border-l-2 border-orange-500'
                                              : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                                          }`}
                                          style={{ '--index': grandchildIndex } as React.CSSProperties}
                                        >
                                          {grandchild.name}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          }

                          return (
                            <Link
                              key={child.href}
                              href={child.href!}
                              onClick={onNavClick}
                              className={`block rounded-lg px-3 py-2 text-xs font-medium transition-colors submenu-item ${
                                isChildLinkActive
                                  ? 'bg-orange-50 text-orange-700 border-l-2 border-orange-500'
                                  : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                              }`}
                              style={{ '--index': childIndex } as React.CSSProperties}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={onNavClick}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-orange-50 text-orange-700 border-l-2 border-orange-500'
                        : 'text-zinc-700 hover:bg-zinc-100'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Settings Link */}
        <div className="border-t border-zinc-200 p-3">
          <Link
            href="/settings"
            onClick={onNavClick}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              pathname === '/settings'
                ? 'bg-orange-50 text-orange-700 border-l-2 border-orange-500'
                : 'text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            <FiSettings className="text-lg" />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
