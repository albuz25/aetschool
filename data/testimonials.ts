export interface Testimonial {
  name: string;
  program: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rohit Verma",
    program: "Autodesk Revit & CAD Course",
    quote:
      "Hands-on BIM training on real project files made all the difference when I sat for job interviews.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    program: "Architecture Design",
    quote:
      "From AutoCAD plans to V-Ray renders, every module built on the last. I felt genuinely job-ready by the capstone.",
    rating: 4,
  },
  {
    name: "Sneha Iyer",
    program: "Data Science",
    quote:
      "The mentors broke down machine learning concepts so clearly that I could apply them to my own projects almost right away.",
    rating: 5,
  },
  {
    name: "Karan Mehta",
    program: "Data Analytics & Business Analytics",
    quote:
      "Excel, SQL and Power BI in one course meant I already had dashboards and case studies to show recruiters.",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    program: "Gen AI & Creative Tech Course",
    quote:
      "The prompt-engineering practice gave me a portfolio of AI-assisted campaigns I could share with hiring managers.",
    rating: 5,
  },
];
