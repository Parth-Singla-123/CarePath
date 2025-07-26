"use server"
import { SignupFormSchema } from "../lib/definations";
import { LoginFormSchema } from "../lib/definations";
import { createSession } from "../lib/session";
import { NextResponse } from "next/server";
import { permanentRedirect } from "next/navigation";
import { deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";


export async function signup(state, formData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      usererror:"",
    };
  }

  // Call the provider or db to create a user...
  const { name, email, password } = validatedFields.data;
  var result={};
  
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name,email,password }),
      }
    );

    result = await response.json();
    console.log(result);

  } catch(error) {
    console.log("Error registering user", error);
  }
  if(result.success) {
    const user = {id:result.data.id,name:result.data.name}
    await createSession(user);
    permanentRedirect(`/`);
  }
  else {
    return { 
      usererror : result.message,
      error:{}, 
    };
  }
}






export async function login(state,formData) {

  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      usererror:"",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;
  var result={}
  try{
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email,password }),
      }
    );
    result = await response.json();
    console.log(result);
  }
  catch(error){
    console.log("error registering user",error);
  }
  if(result.success) {
    const user = {id:result.data.id , name:result.data.name}
    await createSession(user);
    permanentRedirect(`/`);
  }
  else return { 
    usererror : result.message,
    error:{},
  };
}


export async function handleLogout() {
  await deleteSession();
  redirect('/Login');
}



