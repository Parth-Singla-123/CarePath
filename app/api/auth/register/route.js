"use server"
import db from "@/utils/postgres";
import { NextResponse } from "next/server";
import { v1 as uuidv1 } from 'uuid';

export async function POST(request) {
    const{name,email,password} = await request.json();
    const id = uuidv1();
    console.log("recieved user creds",name);
    try{
        await db.query("INSERT INTO user_details(user_id,user_name,user_email,user_password) VALUES($1,$2,$3,$4)",[id,name,email,password]);
        return NextResponse.json({success:true,data:{id:id,name:name}});
    }
    catch(error){
        console.log("Error querying database:",error);
        return NextResponse.json({ success: false, message: 'User already Exists' });
    }
}