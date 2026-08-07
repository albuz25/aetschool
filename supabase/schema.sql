-- AET School of Design — Leads table schema
-- Run this in the Supabase SQL editor once your project is ready to wire up.

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text not null,
  program_interest text not null,
  city text not null,
  source text not null default 'general',
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

-- Leads are inserted only through the server-side API route using the service
-- role key. Do not create public (anon) table policies.
drop policy if exists "Allow public inserts on leads" on public.leads;

-- Optional: index for quick lookups by program/source when reviewing leads.
create index if not exists leads_program_interest_idx on public.leads (program_interest);
create index if not exists leads_created_at_idx on public.leads (created_at desc);
