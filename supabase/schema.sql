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

-- ---------------------------------------------------------------------------
-- Certificates — public verification lookup
-- ---------------------------------------------------------------------------

create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  cert_id varchar(50) unique not null,
  student_name varchar(255) not null,
  course_name varchar(255) not null,
  completion_date date not null,
  issue_date date not null,
  status varchar(20) not null default 'active' check (status in ('active', 'revoked')),
  created_at timestamptz not null default timezone('utc'::text, now())
);

alter table public.certificates enable row level security;

-- Public verification is a SELECT-only lookup of non-sensitive fields.
-- Inserts/updates stay dashboard-only (no INSERT/UPDATE/DELETE policies).
drop policy if exists "Allow public reads on certificates" on public.certificates;
create policy "Allow public reads on certificates"
  on public.certificates
  for select
  to anon, authenticated
  using (true);

create index if not exists idx_certificates_cert_id on public.certificates (cert_id);
create unique index if not exists certificates_cert_id_lower_idx
  on public.certificates (lower(cert_id));
