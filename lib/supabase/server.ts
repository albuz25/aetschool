import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
}

function getServiceRoleKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || "";
}

function getAnonKey() {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || "";
}

/**
 * Server-only Supabase client using the service/secret key, intended for use
 * inside API routes / Server Actions (never expose this key to the browser).
 *
 * Created per call so env vars are read at request time (not baked in as
 * null during `next build` when credentials are only available at runtime).
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  const supabaseUrl = getSupabaseUrl();
  const supabaseServiceRoleKey = getServiceRoleKey();

  if (!supabaseUrl || !supabaseServiceRoleKey) return null;

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });
}

/**
 * Read client for public certificate verification.
 * Prefers the service/secret key; falls back to the anon/publishable key
 * (requires the SELECT policy in supabase/schema.sql).
 */
export function getSupabaseLookupClient(): SupabaseClient | null {
  const supabaseUrl = getSupabaseUrl();
  const key = getServiceRoleKey() || getAnonKey();

  if (!supabaseUrl || !key) return null;

  return createClient(supabaseUrl, key, {
    auth: { persistSession: false },
  });
}
