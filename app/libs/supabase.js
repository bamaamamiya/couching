// supabase.js
'use client'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // ambil dari dashboard
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // ambil dari Project → API → anon public key

// export const supabase = createClient(supabaseUrl, supabaseKey);
export const supabase = createBrowserSupabaseClient()

