# AET School of Design — Website

A modern, responsive, lead-generation-focused website for **AET School of Design**, built with Next.js 16 (App Router), Tailwind CSS v4, Shadcn UI, Framer Motion and React Hook Form + Zod.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript, Turbopack)
- **Styling:** Tailwind CSS v4 (CSS-based theme, see `app/globals.css`)
- **UI Components:** Shadcn UI (`base-nova` style, built on Base UI) + Lucide React icons
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **State:** Zustand (global lead capture modal)
- **Lead capture:** `/api/leads` route with server-side Supabase persistence

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
app/                       App Router pages
  page.tsx                 Home
  fine-arts/page.tsx       Fine Arts program pathways
  programs/page.tsx        Program listing (search + filter)
  programs/[slug]/page.tsx Program detail (B.Voc + software packages)
  about/page.tsx           About + university partnership
  contact/page.tsx         Contact + map embed + inquiry form
  api/leads/route.ts       Lead capture API route

components/
  layout/                  Header (mega-menu), Footer
  home/                    Hero, TrustStats, ProgramGrid, WhyAET, FAQSection
  programs/                ProgramCard, ProgramFilterBar, ProgramDetailView, etc.
  leads/                   InquiryForm, QuickLeadForm, LeadCaptureModal
  shared/                  Container, SectionHeading, FloatingContactBar
  ui/                      Shadcn UI primitives

data/
  courses.ts               Dummy dataset — 5 B.Voc degrees + 4 software packages
  navigation.ts             Header mega-menu + footer link data

lib/
  types.ts                  Program / lead type definitions
  validations/lead.ts        Zod schema for the lead form
  supabase/                  Server-side Supabase client

store/
  useLeadModalStore.ts       Zustand store for the global lead modal

supabase/
  schema.sql                 SQL schema for the `leads` table
```

## Lead Capture Flow

Every "Enquire Now" / "Get Details" / "Download Prospectus" CTA opens the global `LeadCaptureModal`
(or scrolls to an inline form on the homepage / program pages), which POSTs to `/api/leads`.

`/api/leads`:

1. Re-validates the payload server-side with the shared Zod schema.
2. Inserts the lead into Supabase using a server-only service role key.
3. Returns `{ success: true, id }`.

If Supabase credentials are missing, the route safely rejects the submission instead of losing the lead.

### Configure Supabase

1. Create a Supabase project and run `supabase/schema.sql` in the SQL editor to create the `leads` table. RLS stays enabled; the table is not publicly writable.
2. Copy `.env.local.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Restart the Next.js server and submit a test enquiry. Confirm it appears in the `leads` table in Supabase.

## Content & Branding Notes

- All course details, durations, fees, and statistics (`data/courses.ts`, `TrustStats.tsx`) are **illustrative placeholders** — replace with real AET program data before launch.
- Program hero images and site imagery are generated SVG placeholders in `public/images/`.
- Phone/WhatsApp numbers in `FloatingContactBar.tsx` and `Footer.tsx` are placeholders.
- Color palette: Deep Slate/Navy `#0F172A`, Accent Orange `#F97316`, Accent Blue `#2563EB`, Off-White `#F8FAFC` — defined in `app/globals.css`.
