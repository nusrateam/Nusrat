const { PrismaClient } = require('@prisma/client');
// Manually load .env since we don't have dotenv package
const fs = require('fs');
const path = require('path');

try {
    const envConfig = fs.readFileSync(path.resolve(__dirname, '.env'), 'utf8');
    envConfig.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            // Remove quotes if present
            const cleanValue = value.trim().replace(/^["']|["']$/g, '');
            process.env[key.trim()] = cleanValue;
        }
    });
} catch (e) {
    console.log('No .env file found or error reading it');
}

const prisma = new PrismaClient();

async function main() {
    console.log('Testing connection...');
    console.log('URL:', process.env.DATABASE_URL);

    try {
        await prisma.$connect();
        console.log('✅ Connected successfully!');

        // Test a query
        const count = await prisma.project.count();
        console.log('Current project count:', count);

    } catch (e) {
        console.error('❌ Connection failed:', e.message);
    } finally {
        await prisma.$disconnect();
    }
}

main();
