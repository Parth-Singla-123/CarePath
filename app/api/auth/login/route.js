"use server";

import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function POST(request) {
    const { email, password } = await request.json();
    console.log("Received login request for:", email, password);


    try {
        const { data: user, error } = await supabase
            .from('user_details')
            .select('*')
            .eq('user_email', email)
            .single(); 

        if (error) {
            if (error.code === 'PGRST116') {
                return NextResponse.json({ success: false, message: "User does not exist" });
            }
            return NextResponse.json({ success: false, message: "Database error: " + error.message });
        }


        if (!user) {
            return NextResponse.json({ success: false, message: "User does not exist" });
        }

        if (password === user.user_password) {
            return NextResponse.json({
                success: true,
                data: {
                    id: user.user_id,
                    name: user.user_name,
                }
            });
        } else {
            return NextResponse.json({ success: false, message: "Incorrect password" });
        }

    } catch (err) {
        console.error("Internal server error:", err);
        return NextResponse.json({ success: false, message: "Internal server error" });
    }
}
