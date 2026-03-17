"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useLanguage } from "@/components/LanguageProvider";

const HeroScene = dynamic(
    () => import("@/components/HeroScene").then((m) => m.HeroScene),
    { ssr: false }
);

export function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center
            dark:bg-transparent">
            {/* 3D Background — se ve bien en dark, invisible/sutil en light */}
            <HeroScene />

            {/* Grid overlay — solo visible en dark */}
            <div className="absolute inset-0 hidden dark:block bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

            {/* Soft Neumorphic Ambient Light para light mode */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-transparent to-transparent dark:hidden pointer-events-none" />
            
            {/* Soft Neumorphic glow lateral */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 dark:hidden pointer-events-none" />

            <div className="container relative mx-auto max-w-7xl flex flex-col items-center text-center z-10 pt-20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6
                    text-slate-900
                    dark:text-white dark:drop-shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    {t.hero.title}{" "}
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400 pb-2">
                        {t.hero.subtitle}
                    </span>
                </h1>

                <p className="text-sm md:text-lg font-semibold mb-10 tracking-wider px-6 py-2 rounded-full border inline-block
                    text-indigo-700 bg-indigo-50 border-indigo-200
                    dark:text-indigo-200 dark:bg-slate-900/60 dark:border-indigo-500/30 dark:shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                    {t.hero.menciaLegend}
                </p>

                <p className="text-xl md:text-2xl leading-relaxed max-w-3xl font-light text-balance mb-12
                    text-slate-700
                    dark:text-slate-300">
                    {t.hero.description}{" "}
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                        {t.hero.highlight}
                    </span>
                </p>
            </div>
        </section>
    );
}
