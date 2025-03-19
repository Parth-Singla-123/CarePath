import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function POST(request) {
    const {disease_name} = await request.json();
    console.log("Received disease_name in API:", disease_name);
    try{
        const { result, error } = await supabase
        .from('diseases')
        .select('*')
        .eq('disease_name', disease_name);
        const detail = result;

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