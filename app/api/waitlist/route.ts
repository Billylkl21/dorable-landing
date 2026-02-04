import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const { email, name, sponsor } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // 1. Sauvegarde dans Supabase
        const { error: supabaseError } = await supabase
            .from('waitlist')
            .insert([
                { name, email, sponsor }
            ]);

        if (supabaseError) {
            console.error('Supabase Error:', supabaseError);
        }

        // 2. Sauvegarde dans le CSV
        try {
            const filePath = path.join(process.cwd(), 'waitlist.csv');
            const date = new Date().toISOString();
            const safeName = name ? name.replace(/"/g, '""') : '';
            const safeSponsor = sponsor ? sponsor.replace(/"/g, '""') : '';
            const csvLine = `${date},"${safeName}","${email}","${safeSponsor}"\n`;

            if (!fs.existsSync(filePath)) {
                fs.writeFileSync(filePath, 'Date,Name,Email,Sponsor\n');
            }
            fs.appendFileSync(filePath, csvLine);
        } catch (csvErr) {
            console.log('CSV write skipped');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error saving to waitlist:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

