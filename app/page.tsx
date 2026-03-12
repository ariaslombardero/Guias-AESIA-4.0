"use client";

import { useState } from "react";
import { getGuides } from "@/lib/data";
import { GuideCard } from "@/components/GuideCard";
import { HeroSection } from "@/components/HeroSection";
import { TrainingZone } from "@/components/TrainingZone";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Layers, Info, BookOpen, Wrench, ClipboardCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { t, language } = useLanguage();
  const guides = getGuides(language);
  const [showAllGuides, setShowAllGuides] = useState(false);
  const [showIntroDetails, setShowIntroDetails] = useState(false);

  // Separate guides into sections based on their id
  const introGuides = guides.filter(g => ["01", "02"].includes(g.id));
  const techGuides = guides.filter(g => {
    const num = parseInt(g.id);
    return num >= 3 && num <= 15;
  });
  const checklistGuides = guides.filter(g => g.id === "16");

  return (
    <main className="min-h-screen pb-20 bg-slate-950 text-slate-100">
      <HeroSection />

      {/* Guías Técnicas Section */}
      <section className="container mx-auto px-4 py-16 relative z-10" id="guides">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-500/20 mb-3 inline-block">
              16 {t.common.guides}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {t.guides.title}
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              {t.guides.description}
            </p>
          </div>
        </div>

        {/* Info Panel - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40 backdrop-blur-xl p-6 shadow-[0_0_30px_-10px_rgba(99,102,241,0.15)]"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Info className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-indigo-300 mb-2">
                {t.guides.introTitle}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.guides.introText}
              </p>
              <AnimatePresence>
                {showIntroDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-400 text-sm leading-relaxed mt-3 pt-3 border-t border-slate-800">
                      {t.guides.introOrg}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-slate-500 text-xs">{t.guides.introSource}</span>
                      <a
                        href="https://aesia.digital.gob.es/es/guias"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-white bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 hover:border-indigo-500/40 px-3 py-1.5 rounded-lg transition-all duration-200"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        {t.guides.introLinkLabel}
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setShowIntroDetails(!showIntroDetails)}
                className="mt-3 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
              >
                {showIntroDetails ? t.guides.introLess : t.guides.introMore}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showIntroDetails ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Section: Guías Introductorias */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{t.guides.sectionIntro}</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent ml-3" />
          </div>
          <div className="flex justify-center">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl items-stretch">
              {introGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  layout
                  className="flex"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <div className="w-full">
                    <GuideCard guide={guide} index={index} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Section: Guías Técnicas */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Wrench className="w-4 h-4 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{t.guides.sectionTech}</h3>
            <span className="text-xs text-slate-500 font-mono">03 — 15</span>
            <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-3" />
          </div>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {(showAllGuides ? techGuides : techGuides.slice(0, 6)).map((guide, index) => (
                <motion.div
                  key={guide.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <GuideCard guide={guide} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Expand/Collapse Button for tech guides */}
          {techGuides.length > 6 && (
            <div className="flex justify-center mt-10">
              <Button
                onClick={() => setShowAllGuides(!showAllGuides)}
                className="bg-slate-900 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-950 hover:text-white hover:border-indigo-500 px-8 py-6 rounded-full text-base font-semibold group transition-all duration-300 shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)]"
              >
                {showAllGuides ? (
                  <>
                    <ChevronUp className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                    {t.guides.viewLess}
                  </>
                ) : (
                  <>
                    <Layers className="w-5 h-5 mr-2" />
                    {t.guides.viewAll} ({techGuides.length})
                    <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>

        {/* Section: Manual de Checklist */}
        {checklistGuides.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <ClipboardCheck className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{t.guides.sectionChecklist}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent ml-3" />
            </div>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {checklistGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <GuideCard guide={guide} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </section>

      {/* Zona de Entrenamiento - Gamification */}
      <TrainingZone />

    </main>
  );
}
