'use server';

import prisma from '@/lib/prisma';

export async function getInquiries() {
    console.log('Server Action: getInquiries called');
    try {
        const inquiries = await prisma.inquiry.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        console.log('Server Action: getInquiries result count', inquiries.length);
        return inquiries;
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        return [];
    }
}

export type InquiryData = {
    user_name: string;
    user_surname: string;
    user_email: string;
    subject: string;
    message: string;
};

export async function createInquiry(data: InquiryData) {
    console.log('Server Action: createInquiry called with', data);
    try {
        const newInquiry = await prisma.inquiry.create({
            data: {
                name: `${data.user_name} ${data.user_surname}`, // Combining name and surname as schema has 'name' field
                email: data.user_email,
                subject: data.subject,
                message: data.message,
            },
        });
        console.log('Server Action: createInquiry success', newInquiry);
        return { success: true, inquiry: newInquiry };
    } catch (error) {
        console.error('Error creating inquiry:', error);
        return { success: false, error: 'Failed to save inquiry' };
    }
}

export async function getInquiryCount() {
    console.log('Server Action: getInquiryCount called');
    try {
        const count = await prisma.inquiry.count();
        console.log('Server Action: getInquiryCount result', count);
        return count;
    } catch (error) {
        console.error('Error counting inquiries:', error);
        return 0;
    }
}
