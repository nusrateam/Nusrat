"use client";

import { useEffect, useState } from "react";
import { getInquiries } from "@/app/actions/inquiry";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { MessageSquare, Calendar, User, Mail } from "lucide-react";

type Inquiry = {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
};

export default function InquiriesPage() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getInquiries().then((data: any) => {
            setInquiries(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div className="p-8">Yuklanmoqda...</div>;
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-heading mb-2">Murojaatlar</h1>
                <p className="text-slate-500">Kelib tushgan barcha xabarlar ro'yxati.</p>
            </div>

            <div className="grid gap-4">
                {inquiries.length === 0 ? (
                    <Card>
                        <CardContent className="p-8 text-center text-slate-500">
                            Hozircha hech qanday murojaat yo'q.
                        </CardContent>
                    </Card>
                ) : (
                    inquiries.map((inquiry) => (
                        <Card key={inquiry.id} className="overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
                            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800">
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                                        <User size={16} />
                                        {inquiry.name}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                        <Mail size={16} />
                                        {inquiry.email}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                    <Calendar size={14} />
                                    {new Date(inquiry.createdAt).toLocaleString()}
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <h4 className="font-bold text-lg mb-2">{inquiry.subject}</h4>
                                <p className="text-slate-600 dark:text-slate-300 whitespace-pre-wrap">{inquiry.message}</p>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
