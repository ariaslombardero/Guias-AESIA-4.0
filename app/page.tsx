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

  const displayedGuides = showAllGuides ? guides : guides.slice(0, 6);

  return (
    <main className="min-h-screen pb-20 dark:text-slate-100 light:text-slate-900 light:bg-[#f8fafc]">
      <HeroSection />

      {/* Guías Técnicas Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 relative z-10" 
        id="guides"
      >
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 inline-block
              dark:text-indigo-400 dark:bg-indigo-950/50 dark:border-indigo-500/20
              light:text-indigo-600 light:bg-indigo-50 light:border-indigo-200">
              16 {t.common.guides}
            </span>
            <h2 className="text-3xl md:text-5xl font-black dark:text-white light:text-slate-900 mb-4">
              {t.guides.title}
            </h2>
            <p className="dark:text-slate-400 light:text-slate-600 max-w-2xl text-lg">
              {t.guides.description}
            </p>
          </motion.div>
        </div>

        {/* Info Panel - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 rounded-2xl border border-indigo-500/20 dark:bg-gradient-to-r dark:from-indigo-950/40 dark:via-slate-900/60 dark:to-purple-950/40 light:bg-gradient-to-r light:from-indigo-50 light:via-white light:to-purple-50 backdrop-blur-xl p-6 shadow-[0_4px_30px_-10px_rgba(99,102,241,0.2)] hover:shadow-[0_8px_40px_-10px_rgba(99,102,241,0.3)] transition-shadow duration-500"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Info className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold dark:text-indigo-300 light:text-indigo-700 mb-2">
                {t.guides.introTitle}
              </h3>
              <p className="dark:text-slate-400 light:text-slate-600 text-sm leading-relaxed">
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
                    <p className="dark:text-slate-400 light:text-slate-600 text-sm leading-relaxed mt-3 pt-3 dark:border-t dark:border-slate-800 light:border-t light:border-slate-200">
                      {t.guides.introOrg}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="dark:text-slate-500 light:text-slate-500 text-xs">{t.guides.introSource}</span>
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
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold dark:text-white light:text-slate-800">{t.guides.sectionIntro}</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent ml-3" />
          </div>
          <div className="flex justify-center">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl items-stretch">
              {introGuides.map((guide, index) => (
                <div key={guide.id} className="flex">
                  <div className="w-full">
                    <GuideCard guide={guide} index={index} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Section: Guías Técnicas */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Wrench className="w-4 h-4 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold dark:text-white light:text-slate-800">{t.guides.sectionTech}</h3>
            <span className="text-xs text-slate-500 font-mono">03 — 15</span>
            <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-3" />
          </div>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {(showAllGuides ? techGuides : techGuides.slice(0, 6)).map((guide, index) => (
                <div key={guide.id}>
                  <GuideCard guide={guide} index={index} />
                </div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Expand/Collapse Button for tech guides */}
          {techGuides.length > 6 && (
            <div className="flex justify-center mt-10">
              <Button
                onClick={() => setShowAllGuides(!showAllGuides)}
                className="dark:bg-slate-900 light:bg-white border dark:border-indigo-500/30 light:border-indigo-300 dark:text-indigo-300 light:text-indigo-600 hover:bg-indigo-950 hover:text-white hover:border-indigo-500 px-8 py-6 rounded-full text-base font-semibold group transition-all duration-300 shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)]"
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
        </motion.div>

        {/* Section: Manual de Checklist */}
        {checklistGuides.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <ClipboardCheck className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold dark:text-white light:text-slate-800">{t.guides.sectionChecklist}</h3>
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
      </motion.section>

      {/* Zona de Entrenamiento - Gamification */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <TrainingZone />
      </motion.div>

    </main>
  );
}
