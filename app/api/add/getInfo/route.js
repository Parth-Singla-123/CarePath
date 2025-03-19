import { NextResponse } from "next/server";
import db from "@/utils/postgres";

export async function POST(request) {
    const {disease_name} = await request.json();
    console.log("Received disease_name in API:", disease_name);
    try{
        const result = await db.query("SELECT * FROM diseases WHERE disease_name = $1",[disease_name]);
        const detail = result.rows;
        if(detail.length>0) {
            return NextResponse.json({success:true,data:detail});
        }
        else{
            return NextResponse.json({ success: false, message: 'Data not found' });
        }
    }
    catch{
        console.log("Error querying database:", error);
        return NextResponse.json({ success: false, message: 'Internal server error' });
    }
    
}