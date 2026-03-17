"use client";

import React, { useState } from "react";
import { type ContentSection } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, BookOpen, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { RiskTrafficLight } from "./RiskTrafficLight";
import { RiskClassifier } from "./RiskClassifier";
import { HighRiskExplorer } from "./HighRiskExplorer";
import { ConformityRoadmap } from "./ConformityRoadmap";
import { QualityCycle } from "./QualityCycle";
import { RiskMatrix } from "./RiskMatrix";
import { HumanOversightLevels } from "./HumanOversightLevels";

import { RiskLevels } from "./RiskLevels";
import { DataGovernance } from "./DataGovernance";
import { TransparencyInfo } from "./TransparencyInfo";
import { AccuracyMetrics } from "./AccuracyMetrics";
import { RobustnessShield } from "./RobustnessShield";
import { CyberDefense } from "./CyberDefense";
import { LogChain } from "./LogChain";
import { PostMarketProcess } from "./PostMarketProcess";
import { IncidentTimeline } from "./IncidentTimeline";
import { TechnicalFileDocs } from "./TechnicalFileDocs";
import { MaturityScale } from "./MaturityScale";

interface GuideContentProps {
    content: ContentSection[];
}

const WidgetMap: Record<string, React.FC<any>> = {
    'RiskTrafficLight': RiskTrafficLight,
    'RiskLevels': RiskLevels,
    'RiskClassifier': RiskClassifier,
    'HighRiskExplorer': HighRiskExplorer,
    'ConformityRoadmap': ConformityRoadmap,
    'QualityCycle': QualityCycle,
    'RiskMatrix': RiskMatrix,
    'HumanOversightLevels': HumanOversightLevels,
    'DataGovernance': DataGovernance,
    'TransparencyInfo': TransparencyInfo,
    'AccuracyMetrics': AccuracyMetrics,
    'RobustnessShield': RobustnessShield,
    'CyberDefense': CyberDefense,
    'LogChain': LogChain,
    'PostMarketProcess': PostMarketProcess,
    'IncidentTimeline': IncidentTimeline,
    'TechnicalFileDocs': TechnicalFileDocs,
    'MaturityScale': MaturityScale,
};

function toSpanishSentenceCase(text: string): string {
    if (!text) return text;
    
    let isFirstRealWordDone = false;
    
    return text.split(' ').map((word, i, arr) => {
        const clean = word.replace(/[.,;:()\[\]¿?¡!]/g, '');
        // Sigla: palabra ALL_CAPS con letras
        if (clean.length >= 1 && /^[A-ZÁÉÍÓÚÑ0-9]+$/.test(clean) && /[A-ZÁÉÍÓÚÑ]/.test(clean)) {
            if (/[a-zA-ZáéíóúñÁÉÍÓÚÑ]/.test(word)) isFirstRealWordDone = true;
            return word;
        }

        const hasLetters = /[a-zA-ZáéíóúñÁÉÍÓÚÑ]/.test(word);
        const prev = arr[i - 1];
        const prevWords = arr.slice(0, Math.max(0, i));
        // Check if there is any word before that ends with a dot (to support things like "1. 🧠 Conceptos")
        const prevWordWithDot = prevWords.reverse().find(w => /[a-zA-ZáéíóúñÁÉÍÓÚÑ0-9]\./.test(w));
        const prevWordEndsWithDot = prev && /[a-zA-ZáéíóúñÁÉÍÓÚÑ0-9]\./.test(prev);

        const shouldCapitalize = (!isFirstRealWordDone && hasLetters) || 
                                 (hasLetters && prevWordEndsWithDot);

        if (shouldCapitalize) {
            isFirstRealWordDone = true;
            let firstFound = false;
            let result = "";
            for (let j = 0; j < word.length; j++) {
                const char = word[j];
                if (/[a-zA-ZáéíóúñÁÉÍÓÚÑ]/.test(char)) {
                    if (!firstFound) {
                        result += char.toUpperCase();
                        firstFound = true;
                    } else {
                        result += char.toLowerCase();
                    }
                } else {
                    result += char;
                }
            }
            return result;
        } else if (hasLetters) {
            isFirstRealWordDone = true;
            return word.toLowerCase();
        }
        
        return word;
    }).join(' ');
}

export function GuideContent({ content }: GuideContentProps) {
    const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenSectionIndex(openSectionIndex === index ? null : index);
    };

    if (!content || content.length === 0) return null;

    return (
        <div className="space-y-4 w-full max-w-4xl mx-auto mt-8">
            <div className="flex items-center space-x-2 mb-6">
                <Layers className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Índice de contenidos</h2>
            </div>

            <div className="grid gap-3">
                {content.map((section, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-slate-900/40 backdrop-blur-sm border-slate-200 dark:border-slate-800/60 border rounded-xl overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-500/30 shadow-[0_4px_15px_rgb(0,0,0,0.03)] dark:shadow-none transition-colors"
                    >
                        <button
                            onClick={() => toggleSection(index)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left group"
                        >
                            <div className="flex items-center space-x-4">
                                <span className={cn(
                                    "flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-colors",
                                    openSectionIndex === index
                                        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400 ring-1 ring-indigo-300 dark:ring-indigo-500/50"
                                        : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-900 dark:group-hover:bg-slate-800/80 dark:group-hover:text-slate-300"
                                )}>
                                    {index + 1}
                                </span>
                                <span className={cn(
                                    "font-medium transition-colors",
                                    openSectionIndex === index
                                        ? "text-indigo-700 dark:text-white"
                                        : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                                )}>
                                    {toSpanishSentenceCase(section.title)}
                                </span>
                            </div>
                            {openSectionIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-indigo-400" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-slate-300" />
                            )}
                        </button>

                        <AnimatePresence>
                            {openSectionIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                        <div className="bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-700/40">
                                        <div className="px-5 py-6 md:px-8 md:py-8">
                                            <div className="max-w-3xl mx-auto space-y-1">
                                                <ReactMarkdown
                                                    remarkPlugins={[remarkGfm]}
                                                    components={{
                                                        // Párrafos con espaciado generoso
                                                        p: ({ children }) => (
                                                            <p className="text-slate-700 dark:text-slate-300 text-[0.92rem] leading-[1.85] mb-4 font-light">{children}</p>
                                                        ),
                                                        // Headings diferenciados
                                                        h2: ({ children }) => (
                                                            <h2 className="text-indigo-600 dark:text-indigo-300 text-lg font-bold mt-7 mb-3 pb-1 border-b border-indigo-200 dark:border-indigo-500/20">{toSpanishSentenceCase(String(children))}</h2>
                                                        ),
                                                        h3: ({ children }) => (
                                                            <h3 className="text-slate-800 dark:text-slate-200 text-base font-semibold mt-5 mb-2">{toSpanishSentenceCase(String(children))}</h3>
                                                        ),
                                                        h4: ({ children }) => (
                                                            <h4 className="text-indigo-600 dark:text-indigo-400/80 text-sm font-semibold uppercase tracking-wider mt-4 mb-2">{toSpanishSentenceCase(String(children))}</h4>
                                                        ),
                                                        // Blockquote estilizado
                                                        blockquote: ({ children }) => (
                                                            <blockquote className="my-4 pl-4 py-2 border-l-4 border-indigo-500/50 bg-indigo-50/80 dark:bg-indigo-950/30 rounded-r-lg">
                                                                <div className="text-slate-700 dark:text-slate-300 text-sm italic leading-relaxed">{children}</div>
                                                            </blockquote>
                                                        ),
                                                        // Listas
                                                        ul: ({ children }) => (
                                                            <ul className="my-6 space-y-5 pl-1">{children}</ul>
                                                        ),
                                                        ol: ({ children }) => (
                                                            <ol className="my-6 space-y-5 pl-1 list-decimal list-inside">{children}</ol>
                                                        ),
                                                        li: ({ children }) => (
                                                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-[0.95rem] leading-[1.85]">
                                                                <span className="mt-[0.55rem] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400/60"></span>
                                                                <div className="flex-1 space-y-3">{children}</div>
                                                            </li>
                                                        ),
                                                        // Texto en negrita y cursiva
                                                        strong: ({ children }) => (
                                                            <strong className="dark:text-indigo-200 light:text-indigo-700 font-medium">{children}</strong>
                                                        ),
                                                        em: ({ children }) => (
                                                            <em className="dark:text-indigo-300/90 light:text-indigo-600 not-italic font-medium">{children}</em>
                                                        ),
                                                        // Código inline
                                                        code: ({ children }) => (
                                                            <code className="text-amber-300 bg-slate-800/80 px-1.5 py-0.5 rounded text-xs font-mono">{children}</code>
                                                        ),
                                                        // TABLAS - soporte completo GFM
                                                        table: ({ children }) => (
                                                            <div className="my-5 w-full overflow-x-auto rounded-xl border border-slate-700/50">
                                                                <table className="w-full text-sm border-collapse">{children}</table>
                                                            </div>
                                                        ),
                                                        thead: ({ children }) => (
                                                            <thead className="bg-indigo-950/60 border-b border-indigo-500/30">{children}</thead>
                                                        ),
                                                        tbody: ({ children }) => (
                                                            <tbody className="divide-y divide-slate-800/60">{children}</tbody>
                                                        ),
                                                        tr: ({ children }) => (
                                                            <tr className="hover:bg-slate-800/30 transition-colors">{children}</tr>
                                                        ),
                                                        th: ({ children }) => (
                                                            <th className="px-4 py-3 text-left text-xs font-bold dark:text-indigo-300 light:text-indigo-700 uppercase tracking-wider">{children}</th>
                                                        ),
                                                        td: ({ children }) => (
                                                            <td className="px-4 py-3 dark:text-slate-300 light:text-slate-700 text-[0.88rem] leading-relaxed">{children}</td>
                                                        ),
                                                        // Separador horizontal
                                                        hr: () => (
                                                            <hr className="my-6 border-slate-700/50" />
                                                        ),
                                                    }}
                                                >
                                                    {section.content}
                                                </ReactMarkdown>

                                                {/* Dynamic Widget Integration */}
                                                {section.componentId && WidgetMap[section.componentId] && (
                                                    <div className="mt-8 not-prose">
                                                        {section.componentId === 'RiskClassifier' && (
                                                            <h4 className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-4">
                                                                Ponte a prueba
                                                            </h4>
                                                        )}
                                                        {React.createElement(WidgetMap[section.componentId], section.componentProps || {})}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
