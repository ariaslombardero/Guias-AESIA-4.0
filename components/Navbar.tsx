"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Home, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
    const pathname = usePathname();
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none"
        >
            <div className="flex items-center justify-between w-full h-14 md:h-16 gap-2">

                {/* LEFT COLUMN: Logo */}
                <div className="flex shrink-0 justify-start items-center">
                    <div className="pointer-events-auto relative h-8 w-24 md:h-10 md:w-32 lg:h-12 lg:w-40 transition-transform hover:scale-105">
                        <Link href="/" className="block w-full h-full relative">
                            <Image
                                src="/images/mencia.png"
                                alt="MencIA Plan de Alfabetización"
                                fill
                                className={`object-contain object-left transition-all duration-300 ${
                                    theme === "dark"
                                        ? "brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                                        : "brightness-0 sepia-0 drop-shadow-[0_0_4px_rgba(0,0,0,0.1)] opacity-80"
                                }`}
                                priority
                            />
                        </Link>
                    </div>
                </div>

                {/* CENTER COLUMN: Navigation */}
                <div className="flex flex-1 justify-center items-center pointer-events-auto overflow-hidden">
                    <nav className="inline-flex items-center gap-1 p-1 md:p-1.5 rounded-full dark:bg-slate-900/90 light:bg-white/90 dark:border-slate-700/50 light:border-slate-200/80 border backdrop-blur-xl shadow-lg dark:ring-1 dark:ring-white/5 whitespace-nowrap overflow-x-auto scrollbar-hide">
                        <NavItem href="/" isActive={pathname === "/"}>
                            <Home className="w-4 h-4 shrink-0" />
                            <span className="ml-2 hidden lg:inline">{t.navbar.home}</span>
                        </NavItem>

                        {pathname.startsWith("/guides/") && (
                            <div className="flex items-center text-[10px] md:text-xs font-medium dark:text-slate-400 light:text-slate-500 px-1 md:px-2 transition-opacity animate-in fade-in shrink-0">
                                <span className="mx-1 md:mx-2 h-3 w-[1px] bg-slate-700 block"></span>
                                <BookOpen className="w-3.5 h-3.5 mr-1 hidden sm:block" />
                                <span className="hidden lg:inline">{t.navbar.activeGuide}</span>
                                <span className="lg:hidden">Guía</span>
                            </div>
                        )}
                    </nav>
                </div>

                {/* RIGHT COLUMN: Theme Toggle + Language Switcher */}
                <div className="flex shrink-0 justify-end items-center gap-2">
                    <div className="pointer-events-auto">
                        <ThemeToggle />
                    </div>
                    <div className="pointer-events-auto">
                        <LanguageSwitcher />
                    </div>
                </div>

            </div>
        </motion.header>
    );
}

function NavItem({
    href,
    isActive,
    children,
    disabled = false
}: {
    href: string;
    isActive: boolean;
    children: React.ReactNode;
    disabled?: boolean;
}) {
    if (disabled) {
        return (
            <span className="px-3 py-2 lg:px-4 text-sm font-medium text-slate-400 cursor-not-allowed">
                {children}
            </span>
        );
    }

    return (
        <Link
            href={href}
            className={cn(
                "relative px-3 py-2 lg:px-4 text-sm font-medium transition-colors rounded-full flex items-center justify-center",
                isActive
                    ? "text-slate-900 dark:text-slate-100"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            )}
        >
            {isActive && (
                <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 dark:bg-slate-800 light:bg-indigo-100 rounded-full shadow-inner dark:border dark:border-slate-700 light:border light:border-indigo-200"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    style={{ zIndex: -1 }}
                />
            )}
            <span className={cn("relative z-10 flex items-center", isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200")}>{children}</span>
        </Link>
    );
}
