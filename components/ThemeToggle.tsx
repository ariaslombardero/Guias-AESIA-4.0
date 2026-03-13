"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
            title={isDark ? "Activar modo claro" : "Activar modo oscuro"}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: isDark ? "rgba(30,41,59,0.8)" : "rgba(255,255,255,0.8)",
                border: isDark ? "1px solid rgba(71,85,105,0.6)" : "1px solid rgba(203,213,225,0.8)",
                color: isDark ? "#94a3b8" : "#475569",
                backdropFilter: "blur(8px)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                cursor: "pointer",
                transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = isDark
                    ? "rgba(51,65,85,0.9)"
                    : "rgba(241,245,249,0.9)";
                (e.currentTarget as HTMLButtonElement).style.color = isDark ? "#f1f5f9" : "#0f172a";
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = isDark
                    ? "rgba(30,41,59,0.8)"
                    : "rgba(255,255,255,0.8)";
                (e.currentTarget as HTMLButtonElement).style.color = isDark ? "#94a3b8" : "#475569";
            }}
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: "flex" }}
                    >
                        <Sun style={{ width: "16px", height: "16px" }} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: "flex" }}
                    >
                        <Moon style={{ width: "16px", height: "16px" }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
