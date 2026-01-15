const { Client } = require('pg'); // Note: nusrat project likely doesn't have 'pg' installed directly, let's use 'prisma' if possible or just try-catch with standard net.
// Actually, let's use the local prisma client to test.
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.$connect();
        console.log('Successfully connected to database');
    } catch (e) {
        console.error('Failed to connect:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
