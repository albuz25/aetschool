import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service role key, intended for use
 * inside API routes / Server Actions (never expose this key to the browser).
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseServerClient =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: { persistSession: false },
      })
    : null;
