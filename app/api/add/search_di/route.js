import { NextResponse } from "next/server";
import db from "@/utils/postgres";
import _ from "lodash";

export async function POST(request){
    const { di } = await request.json();
    const str = _.capitalize(di);
    const result = await db.query("SELECT disease_name FROM diseases WHERE disease_name LIKE $1 ",[`${str}%`]);
    const items = result.rows;
    if(items) {
        return NextResponse.json({success:true,data:items});
    }
    else{
        return NextResponse.json({ success: false, message: 'User not found' });
    }
}