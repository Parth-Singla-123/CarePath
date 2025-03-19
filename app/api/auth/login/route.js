"use server"
import db from "@/utils/postgres";
import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function POST(request) {
    const {email, password} = await request.json();
    console.log("recieved login request",email);
    try{
        const { data: user, error } = await supabase
            .from('user_details')
            .select('*')
            .eq('user_email', email)
            .single();

        if(password===creds.user_password) return NextResponse.json({
                success: true,
                data: {
                    id: user.user_id,
                    name: user.user_name,
                    email: user.user_email
                }
            });

        else return NextResponse.json({success:false,message:"Password is incorrect... Try Again!"});
    }
    catch(error) {
        console.log("error querying database",error);
        return NextResponse.json({success:false,message:"You don't have an account !"});
    }
}