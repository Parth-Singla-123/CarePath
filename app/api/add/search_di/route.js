import { NextResponse } from "next/server";
import _ from "lodash";
import { supabase } from "@/app/lib/supabase";

export async function POST(request){
    const { di } = await request.json();

        // Capitalize the search term
        const str = _.capitalize(di);

        // Query Supabase database
        const { result, error } = await supabase
            .from('diseases')
            .select('disease_name')
            .ilike('disease_name', `${str}%`);
    const items = result.rows;

    if (error) {
        console.error("Database Error:", error.message);
        return NextResponse.json({ success: false, message: 'Database error' });
    }

    if(items) {
        return NextResponse.json({success:true,data:items});
    }
    else{
        return NextResponse.json({ success: false, message: 'User not found' });
    }
}