import { createClient } from "@supabase/supabase-js";

/**
 * Browser-safe Supabase client, using the public anon key.
 *
 * NOT currently used by the lead capture flow — /api/leads logs leads
 * server-side for now. Wire this up (or the server client) once real
 * Supabase project credentials are added to `.env.local`.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY;

export const supabaseClient =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
