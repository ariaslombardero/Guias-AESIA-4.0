"use client";

import Link from "next/link";
import { type Guide } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

interface GuideCardProps {
    guide: Guide;
    index: number;
}

export function GuideCard({ guide, index }: GuideCardProps) {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
        >
            <Card className="h-full flex flex-col overflow-hidden
                dark:border-slate-800 light:border-slate-200
                hover:border-indigo-500/50 transition-all duration-300 group
                dark:bg-slate-900/40 light:bg-white/70
                backdrop-blur-md shadow-lg
                hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]
                hover:-translate-y-1">
                <CardHeader className="dark:bg-slate-900/50 light:bg-slate-50/80 dark:border-b dark:border-slate-800 light:border-b light:border-slate-200 pb-4">
                    <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xs font-bold ring-2 dark:ring-slate-900 light:ring-white shadow-sm">
                            {guide.id}
                        </div>
                        <BookOpen className="w-5 h-5 dark:text-slate-500 light:text-slate-400 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <CardTitle className="mt-4 text-xl line-clamp-2 leading-tight min-h-[3rem] dark:text-slate-100 light:text-slate-800 group-hover:text-indigo-500 transition-colors">
                        {guide.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                    <CardDescription className="line-clamp-4 text-base dark:text-slate-400 light:text-slate-600">
                        {guide.summary}
                    </CardDescription>
                </CardContent>
                <CardFooter className="pt-2 pb-6">
                    <Button asChild className="w-full dark:bg-slate-800 light:bg-indigo-50 hover:bg-indigo-600 dark:text-white light:text-indigo-700 hover:text-white dark:border-slate-700 light:border-indigo-200 hover:border-indigo-500 border transition-all">
                        <Link href={`/guides/${guide.id}`}>
                            {t.common.startGuide}
                            <ArrowRight className="ml-2 w-4 h-4 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
