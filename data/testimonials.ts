export interface Testimonial {
  name: string;
  program: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    program: "B.Voc Animation & VFX",
    quote:
      "The studio-style production training gave me a portfolio strong enough to land a VFX internship before I even graduated.",
    rating: 5,
  },
  {
    name: "Rohit Verma",
    program: "Autodesk Revit & CAD Package",
    quote:
      "Hands-on BIM training on real project files made all the difference when I sat for job interviews.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    program: "B.Voc Interior Design",
    quote:
      "From sketching to rendering in V-Ray, every semester built on the last. I felt genuinely job-ready by graduation.",
    rating: 4,
  },
  {
    name: "Karan Mehta",
    program: "B.Voc Digital Marketing",
    quote:
      "Running live ad campaigns during the course meant I already had real numbers and case studies to show recruiters.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    program: "Data Science & AI Package",
    quote:
      "The mentors broke down machine learning concepts so clearly that I could apply them to my own projects almost right away.",
    rating: 5,
  },
  {
    name: "Aditya Rao",
    program: "B.Voc Fine Arts",
    quote:
      "I came in knowing only traditional painting and left with a full digital illustration portfolio too.",
    rating: 5,
  },
];
