export type ProgramType = "bvoc" | "package";

export interface SoftwareTool {
  name: string;
  iconLabel: string; // short label used to render a lucide-react icon lookup key
}

export interface CurriculumModule {
  module: string;
  topics: string[];
}

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface Program {
  slug: string;
  type: ProgramType;
  title: string;
  shortTitle: string;
  duration: string;
  tagline: string;
  overview: string;
  heroImage: string;
  softwareTools: SoftwareTool[];
  highlights: string[];
  curriculum: CurriculumModule[];
  careerRoles: string[];
  faqs?: ProgramFAQ[];
  /** Public brochure PDF path, when available for this program */
  brochurePath?: string;
  /** University partner offering accreditation, only for B.Voc programs */
  accreditation?: string;
  /** Certifying body for short-term software packages */
  certificationBody?: string;
  eligibility: string;
  fees: string;
}

export interface LeadPayload {
  name: string;
  email?: string;
  phone: string;
  programInterest: string;
  city: string;
  source: string;
}
