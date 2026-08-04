-- AET School of Design — Leads table schema
-- Run this in the Supabase SQL editor once your project is ready to wire up.

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  program_interest text not null,
  city text not null,
  state text not null,
  source text not null default 'general',
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

-- Allow anonymous (public) inserts from the website's lead forms,
-- but never allow reads/updates/deletes from the anon role.
create policy "Allow public inserts on leads"
  on public.leads
  for insert
  to anon
  with check (true);

-- Optional: index for quick lookups by program/source when reviewing leads.
create index if not exists leads_program_interest_idx on public.leads (program_interest);
create index if not exists leads_created_at_idx on public.leads (created_at desc);
