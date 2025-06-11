export const revalidate = 60;

import { NextResponse } from "next/server";
import _ from "lodash";
import { supabase } from "@/app/lib/supabase";

export async function POST(request){
    const { di } = await request.json();
    console.log("Received input:", di);

    const str = _.capitalize(di);
    console.log("Capitalized:", str);

    const { data, error } = await supabase
        .from('diseases')
        .select('disease_name')
        .ilike('disease_name', `${str}%`).limit(5);

    console.log("disease is:", data);

    if (error) {
        console.error("Database Error:", error.message);
        return NextResponse.json({ success: false, message: 'Database error' });
    }

    if(data?.length) {
        return NextResponse.json({ success: true, data });
    } else {
        return NextResponse.json({ success: false, message: 'No match found' });
    }
}
