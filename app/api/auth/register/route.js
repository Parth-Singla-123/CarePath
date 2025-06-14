"use server";
import { supabase } from "@/app/lib/supabase"; 
import { NextResponse } from "next/server";
import { v1 as uuidv1 } from 'uuid';

export async function POST(request) {
    const { name, email, password } = await request.json();
    const id = uuidv1();
    console.log("Received user creds:", name);

    try {

        const { data, error } = await supabase
            .from('user_details')
            .insert([
                {
                    user_id: id,
                    user_name: name,
                    user_email: email,
                    user_password: password 
                }
            ]);

        if (error) {
            console.error("Database Error:", error.message);

            if (error.code === '23505') {
                return NextResponse.json({ success: false, message: 'User already exists' });
            }

            return NextResponse.json({ success: false, message: 'Database error' });
        }

        return NextResponse.json({ success: true, data: { id, name } });
    } catch (error) {
        console.error("Error querying database:", error.message);
        return NextResponse.json({ success: false, message: 'Internal server error' });
    }
}
