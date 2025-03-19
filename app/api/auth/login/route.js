"use server"
import db from "@/utils/postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {email, password} = await request.json();
    console.log("recieved login request",email);
    try{
        const result = await db.query("SELECT * FROM user_details WHERE user_email=$1",[email]);
        const creds = result.rows[0];
        console.log(creds);
        if(password===creds.user_password) return NextResponse.json({success:true,data:creds});
        else return NextResponse.json({success:false,message:"Password is incorrect... Try Again!"});
    }
    catch(error) {
        console.log("error querying database",error);
        return NextResponse.json({success:false,message:"You don't have an account !"});
    }
}