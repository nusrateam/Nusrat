"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500); // Show for 2.5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
                >
                    <div className="flex flex-col items-center space-y-6">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                            }}
                            className="relative w-32 h-32 md:w-48 md:h-48"
                        >
                            <Image
                                src="/logo.png"
                                alt="NUSRAT Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-slate-900 dark:text-white font-poppins">
                                NUSRAT
                            </h1>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent mt-2 w-full origin-center"
                            />
                        </motion.div>
                    </div>

                    {/* Subtle background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
