"use client";

import { motion } from "framer-motion";
import { Timer, Trophy, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";

const TrainingCard = ({
    title,
    subtitle,
    icon: Icon,
    stats,
    color,
    href,
    systemStatusLabel = "ESTADO DEL SISTEMA"
}: {
    title: string;
    subtitle: string;
    icon: any;
    stats: string;
    color: "cyan" | "purple" | "emerald";
    href: string;
    systemStatusLabel?: string;
}) => {

    const colorStyles = {
        cyan: {
            // Light
            iconBg: "bg-cyan-50 border-transparent shadow-sm",
            iconColor: "text-cyan-600",
            dot: "bg-cyan-500",
            bar: "bg-cyan-500",
            hoverBorder: "hover:border-transparent",
            hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.25)]",
            // Dark overrides
            darkIconBg: "dark:bg-cyan-500/10 dark:border-white/10 dark:shadow-none",
            darkIconColor: "dark:text-cyan-400",
            darkHoverBorder: "dark:hover:border-cyan-500/50",
            darkHoverShadow: "dark:hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]",
        },
        purple: {
            iconBg: "bg-purple-50 border-transparent shadow-sm",
            iconColor: "text-purple-600",
            dot: "bg-purple-500",
            bar: "bg-purple-500",
            hoverBorder: "hover:border-transparent",
            hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.25)]",
            darkIconBg: "dark:bg-purple-500/10 dark:border-white/10 dark:shadow-none",
            darkIconColor: "dark:text-purple-400",
            darkHoverBorder: "dark:hover:border-purple-500/50",
            darkHoverShadow: "dark:hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
        },
        emerald: {
            iconBg: "bg-emerald-50 border-transparent shadow-sm",
            iconColor: "text-emerald-700",
            dot: "bg-emerald-500",
            bar: "bg-emerald-500",
            hoverBorder: "hover:border-transparent",
            hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.25)]",
            darkIconBg: "dark:bg-emerald-500/10 dark:border-white/10 dark:shadow-none",
            darkIconColor: "dark:text-emerald-400",
            darkHoverBorder: "dark:hover:border-emerald-500/50",
            darkHoverShadow: "dark:hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
        }
    };

    const s = colorStyles[color];

    return (
        <Link href={href} className="block relative group h-full">
            <div className={cn(
                "h-full relative overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1.5",
                // BASE = Light mode: card blanca, floating paper sin bordes duros
                "bg-white border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
                s.hoverBorder, s.hoverShadow,
                // Dark mode: HUD estética original
                "dark:bg-slate-900/40 dark:backdrop-blur-md dark:border-slate-700/50 dark:shadow-none",
                s.darkHoverBorder, s.darkHoverShadow
            )}>

                {/* HUD corner elements — solo en dark */}
                <div className="hidden dark:block">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-500 group-hover:border-white transition-colors" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-500 group-hover:border-white transition-colors" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-500 group-hover:border-white transition-colors" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-500 group-hover:border-white transition-colors" />
                </div>

                {/* Animated scanline — solo en dark */}
                <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />

                {/* Header */}
                <div className="flex items-start justify-between mb-8 p-6 pb-0">
                    <div className={cn("p-3 rounded-lg border", s.iconBg, s.darkIconBg)}>
                        <Icon className={cn("w-6 h-6", s.iconColor, s.darkIconColor)} />
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        <span className={cn("w-2 h-2 rounded-full animate-pulse", s.dot)} />
                        Online
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-10 p-6 pt-0">
                    <div>
                        <h3 className="text-xl font-bold mb-1
                            text-slate-800 group-hover:text-slate-900
                            dark:text-white dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-white dark:group-hover:to-slate-300">
                            {title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                            {subtitle}
                        </p>
                    </div>

                    {/* Stats / Progress */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500 mb-2">
                            <span>{systemStatusLabel}</span>
                            <span>{stats}</span>
                        </div>
                        <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className={cn("h-full w-[0%] group-hover:w-[70%] transition-all duration-700 ease-out delay-100", s.bar)} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export function TrainingZone() {
    const { t } = useLanguage();

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Soft Ambient Light for light mode */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-slate-100 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-end justify-between mb-12 border-b border-transparent dark:border-indigo-500/20 pb-4">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2
                            text-indigo-600 dark:text-indigo-400">
                            <Cpu className="w-4 h-4" />
                            {t.gamification.title}
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                            {t.gamification.simulators}
                        </h3>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-xs font-mono text-indigo-400/60 dark:text-indigo-400/60">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        SYSTEM_READY
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TrainingCard
                        title={t.gamification.adventureTitle}
                        subtitle={t.gamification.adventureDesc}
                        icon={Trophy}
                        color="purple"
                        stats={t.gamification.progressSaved}
                        systemStatusLabel={t.gamification.systemStatus}
                        href="/aventura"
                    />
                    <TrainingCard
                        title={t.gamification.pasapalabraTitle}
                        subtitle={t.gamification.pasapalabraDesc}
                        icon={Timer}
                        color="cyan"
                        stats={`${t.gamification.bestTime}: --:--`}
                        systemStatusLabel={t.gamification.systemStatus}
                        href="/pasapalabra"
                    />
                    <TrainingCard
                        title={t.gamification.escapeRoomTitle}
                        subtitle={t.gamification.escapeRoomDesc}
                        icon={ShieldCheck}
                        color="emerald"
                        stats={t.gamification.accessControlled}
                        systemStatusLabel={t.gamification.systemStatus}
                        href="/escape-room"
                    />
                </div>
            </div>
        </section>
    );
}
