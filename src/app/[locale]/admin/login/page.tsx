'use client';

import { useActionState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { login } from '@/app/actions/auth';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

const initialState = {
    success: false,
    message: '',
};

export default function LoginPage() {
    const t = useTranslations('Admin');
    const locale = useLocale();
    const [state, formAction, isPending] = useActionState(login, initialState);

    if (state.success) {
        if (typeof window !== 'undefined') {
            window.location.href = `/${locale}/admin`;
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-md w-full space-y-8 bg-card p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800">
                <div className="text-center">
                    <div className="flex justify-center mt-6">
                        <Image
                            src="/logo.png"
                            alt="Nusrat Logo"
                            width={180}
                            height={60}
                            className="dark:invert h-12 w-auto object-contain"
                            priority
                        />
                    </div>
                    <p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        Admin panelga kirish
                    </p>
                </div>
                <form className="mt-8 space-y-6" action={formAction}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all sm:text-sm bg-slate-50/50 dark:bg-slate-800/50"
                                placeholder="Admin"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all sm:text-sm bg-slate-50/50 dark:bg-slate-800/50"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {state?.message && (
                        <div className="text-red-500 text-xs font-bold text-center bg-red-50 dark:bg-red-900/10 py-2 rounded-lg border border-red-100 dark:border-red-900/20">
                            {state.message}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest"
                        >
                            {isPending ? (
                                <Loader2 className="animate-spin h-5 w-5" />
                            ) : (
                                'Tizimga kirish'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
