import type { Program } from "@/lib/types";

interface ProgramFAQGeneral {
  question: string;
  answer: string;
}

export const bvocPrograms: Program[] = [
  {
    slug: "bvoc-animation-vfx",
    type: "bvoc",
    title: "B.Voc in Animation & VFX",
    shortTitle: "Animation & VFX",
    duration: "3 Years (6 Semesters)",
    tagline: "Turn imagination into frame-by-frame reality with industry-grade animation and VFX pipelines.",
    overview:
      "This university-partnered B.Voc degree builds a strong foundation in 2D/3D animation, visual effects, compositing and game art, blended with real production-studio workflows. Students graduate with an accredited degree and a portfolio reel ready for studio hiring.",
    heroImage: "/images/programs/animation-vfx.svg",
    softwareTools: [
      { name: "Autodesk Maya", iconLabel: "maya" },
      { name: "Adobe After Effects", iconLabel: "aftereffects" },
      { name: "Autodesk 3ds Max", iconLabel: "3dsmax" },
      { name: "Nuke", iconLabel: "nuke" },
      { name: "Adobe Photoshop", iconLabel: "photoshop" },
    ],
    highlights: [
      "University-recognized 3-year degree",
      "Studio-style production pipeline training",
      "Showreel & portfolio development in final year",
      "Industry mentorship from working VFX artists",
    ],
    curriculum: [
      {
        module: "Semester 1-2: Foundations",
        topics: ["Principles of Animation", "Drawing & Visual Storytelling", "Digital Illustration", "Intro to 3D Space & Modeling"],
      },
      {
        module: "Semester 3-4: Core Production Skills",
        topics: ["3D Modeling & Texturing (Maya, 3ds Max)", "Rigging & Character Animation", "Lighting & Rendering", "Compositing Fundamentals (After Effects)"],
      },
      {
        module: "Semester 5: Specialization",
        topics: ["VFX & Motion Graphics", "Simulation (Fluids, Cloth, Particles)", "Editing & Sound Design", "Game Asset Pipeline"],
      },
      {
        module: "Semester 6: Capstone & Industry Project",
        topics: ["Studio Internship / Live Project", "Portfolio & Showreel Production", "Industry Presentation & Placement Prep"],
      },
    ],
    careerRoles: [
      "3D Animator",
      "VFX Compositor",
      "Character Rigger",
      "Motion Graphics Artist",
      "Game Art Designer",
      "Storyboard Artist",
    ],
    faqs: [
      {
        question: "Do I need prior drawing skills to join this program?",
        answer: "No prior professional experience is required. The first two semesters build your foundational drawing and visual storytelling skills from scratch.",
      },
      {
        question: "Is this degree recognized by universities/UGC bodies?",
        answer: "Yes, the B.Voc is awarded in partnership with our affiliated university and follows UGC-aligned vocational education norms.",
      },
    ],
    accreditation: "Awarded in partnership with a UGC-recognized university under the National Skills Qualification Framework (NSQF).",
    eligibility: "10+2 in any stream from a recognized board.",
    fees: "Contact admissions for current semester-wise fee structure and scholarship eligibility.",
  },
  {
    slug: "bvoc-interior-design",
    type: "bvoc",
    title: "B.Voc in Interior Design",
    shortTitle: "Interior Design",
    duration: "3 Years (6 Semesters)",
    tagline: "Design functional, beautiful spaces using industry-standard CAD, BIM and 3D visualization tools.",
    overview:
      "A comprehensive degree covering design theory, materials, space planning and the full digital toolkit (AutoCAD, SketchUp, Revit, V-Ray) used by professional interior design studios, culminating in a real client-style capstone project.",
    heroImage: "/images/programs/interior-design.svg",
    softwareTools: [
      { name: "AutoCAD", iconLabel: "autocad" },
      { name: "SketchUp", iconLabel: "sketchup" },
      { name: "Autodesk Revit", iconLabel: "revit" },
      { name: "V-Ray", iconLabel: "vray" },
      { name: "3ds Max", iconLabel: "3dsmax" },
    ],
    highlights: [
      "University-recognized 3-year degree",
      "Hands-on studio and site-visit learning",
      "BIM-ready curriculum with Autodesk Revit",
      "Live client project in final semester",
    ],
    curriculum: [
      {
        module: "Semester 1-2: Design Foundations",
        topics: ["Elements & Principles of Design", "Drafting Fundamentals (AutoCAD)", "Materials & Finishes", "Color Theory & Ergonomics"],
      },
      {
        module: "Semester 3-4: Technical Design",
        topics: ["3D Modeling (SketchUp, 3ds Max)", "Building Information Modeling (Revit)", "Lighting Design", "Furniture & Space Planning"],
      },
      {
        module: "Semester 5: Advanced Visualization",
        topics: ["Photorealistic Rendering (V-Ray)", "Sustainable Design Practices", "Estimation & Costing", "Residential & Commercial Design Studios"],
      },
      {
        module: "Semester 6: Capstone & Industry Project",
        topics: ["Live Client Project", "Site Execution Basics", "Portfolio Development", "Placement Preparation"],
      },
    ],
    careerRoles: [
      "Interior Designer",
      "3D Visualizer",
      "BIM Modeler",
      "Space Planner",
      "Design Consultant",
      "Furniture & Set Designer",
    ],
    faqs: [
      {
        question: "Will I learn Autodesk Revit as part of this degree?",
        answer: "Yes. Revit and BIM workflows are integrated from Semester 3 onward as part of the interior design curriculum.",
      },
      {
        question: "Are site visits included?",
        answer: "Yes, guided site visits to active project sites are part of the practical curriculum in later semesters.",
      },
    ],
    accreditation: "Awarded in partnership with a UGC-recognized university under the National Skills Qualification Framework (NSQF).",
    eligibility: "10+2 in any stream from a recognized board.",
    fees: "Contact admissions for current semester-wise fee structure and scholarship eligibility.",
    brochurePath: "/brochures/bvoc-interior-design.pdf",
  },
  {
    slug: "bvoc-fine-arts",
    type: "bvoc",
    title: "B.Voc in Fine Arts",
    shortTitle: "Fine Arts",
    duration: "3 Years (6 Semesters)",
    tagline: "Master traditional and digital art practices to build a professional creative career.",
    overview:
      "This degree blends classical fine arts training (drawing, painting, sculpture) with modern digital art and illustration tools, preparing graduates for careers as professional artists, illustrators and creative directors.",
    heroImage: "/images/programs/fine-arts.svg",
    softwareTools: [
      { name: "Adobe Photoshop", iconLabel: "photoshop" },
      { name: "Adobe Illustrator", iconLabel: "illustrator" },
      { name: "Procreate", iconLabel: "procreate" },
      { name: "Corel Painter", iconLabel: "painter" },
    ],
    highlights: [
      "University-recognized 3-year degree",
      "Classical + digital art dual training",
      "Gallery-style final exhibition",
      "Portfolio built for illustration/design careers",
    ],
    curriculum: [
      {
        module: "Semester 1-2: Classical Foundations",
        topics: ["Life Drawing & Anatomy", "Painting Techniques", "Art History & Appreciation", "Composition & Perspective"],
      },
      {
        module: "Semester 3-4: Sculpture & Mixed Media",
        topics: ["Sculpture & 3D Form", "Printmaking", "Mixed Media Art", "Intro to Digital Illustration"],
      },
      {
        module: "Semester 5: Digital Art Specialization",
        topics: ["Digital Painting (Photoshop, Procreate)", "Vector Illustration (Illustrator)", "Concept Art Basics", "Portfolio Curation"],
      },
      {
        module: "Semester 6: Capstone & Exhibition",
        topics: ["Independent Art Project", "Public Exhibition Showcase", "Freelance & Gallery Career Prep"],
      },
    ],
    careerRoles: [
      "Illustrator",
      "Concept Artist",
      "Fine Artist",
      "Art Director",
      "Muralist",
      "Freelance Creative Professional",
    ],
    faqs: [
      {
        question: "Is this degree only for traditional art, or does it cover digital tools too?",
        answer: "Both. The first half builds classical fine-art fundamentals; from Semester 5 you specialize in digital painting and illustration software.",
      },
    ],
    accreditation: "Awarded in partnership with a UGC-recognized university under the National Skills Qualification Framework (NSQF).",
    eligibility: "10+2 in any stream from a recognized board.",
    fees: "Contact admissions for current semester-wise fee structure and scholarship eligibility.",
    brochurePath: "/brochures/bvoc-fine-arts.pdf",
  },
  {
    slug: "bvoc-data-science",
    type: "bvoc",
    title: "B.Voc in Data Science",
    shortTitle: "Data Science",
    duration: "3 Years (6 Semesters)",
    tagline: "Build a career in analytics, machine learning and AI with a university-backed vocational degree.",
    overview:
      "A rigorous, hands-on data science degree covering statistics, Python, SQL, machine learning and business intelligence tools, designed to make graduates job-ready for analyst and junior data science roles.",
    heroImage: "/images/programs/data-science.svg",
    softwareTools: [
      { name: "Python", iconLabel: "python" },
      { name: "SQL", iconLabel: "sql" },
      { name: "Power BI", iconLabel: "powerbi" },
      { name: "Scikit-learn", iconLabel: "sklearn" },
      { name: "Tableau", iconLabel: "tableau" },
    ],
    highlights: [
      "University-recognized 3-year degree",
      "Project-based learning with real datasets",
      "Covers Python, SQL, ML and BI tools",
      "Capstone project + placement support",
    ],
    curriculum: [
      {
        module: "Semester 1-2: Foundations",
        topics: ["Statistics & Probability", "Python Programming", "Data Structures Basics", "Excel & Data Handling"],
      },
      {
        module: "Semester 3-4: Core Data Science",
        topics: ["SQL & Database Management", "Data Visualization (Power BI, Tableau)", "Exploratory Data Analysis", "Intro to Machine Learning"],
      },
      {
        module: "Semester 5: Applied Machine Learning",
        topics: ["Supervised & Unsupervised Learning", "Model Evaluation & Tuning", "Intro to Deep Learning", "Business Case Studies"],
      },
      {
        module: "Semester 6: Capstone & Industry Project",
        topics: ["End-to-End Data Science Project", "Industry Internship", "Interview & Placement Preparation"],
      },
    ],
    careerRoles: [
      "Data Analyst",
      "Junior Data Scientist",
      "Business Intelligence Analyst",
      "Machine Learning Trainee",
      "Reporting Analyst",
    ],
    faqs: [
      {
        question: "Do I need a math or computer science background to join?",
        answer: "No specific background is required. Foundational statistics and programming are taught from Semester 1.",
      },
    ],
    accreditation: "Awarded in partnership with a UGC-recognized university under the National Skills Qualification Framework (NSQF).",
    eligibility: "10+2 in any stream from a recognized board (Mathematics background helpful but not mandatory).",
    fees: "Contact admissions for current semester-wise fee structure and scholarship eligibility.",
  },
  {
    slug: "bvoc-digital-marketing",
    type: "bvoc",
    title: "B.Voc in Digital Marketing",
    shortTitle: "Digital Marketing",
    duration: "3 Years (6 Semesters)",
    tagline: "Master SEO, paid ads, content and analytics to launch a career in modern digital marketing.",
    overview:
      "This degree covers the full digital marketing stack — SEO, social media, paid advertising, content strategy and analytics — with live campaign projects so graduates enter the workforce with real, measurable experience.",
    heroImage: "/images/programs/digital-marketing.svg",
    softwareTools: [
      { name: "Google Ads", iconLabel: "googleads" },
      { name: "Google Analytics", iconLabel: "analytics" },
      { name: "Meta Ads Manager", iconLabel: "meta" },
      { name: "SEMrush", iconLabel: "semrush" },
      { name: "HubSpot", iconLabel: "hubspot" },
    ],
    highlights: [
      "University-recognized 3-year degree",
      "Live campaign management experience",
      "Covers SEO, paid ads, content & analytics",
      "Industry certifications integrated into curriculum",
    ],
    curriculum: [
      {
        module: "Semester 1-2: Marketing Foundations",
        topics: ["Principles of Marketing", "Consumer Behaviour", "Content Writing Basics", "Introduction to Digital Channels"],
      },
      {
        module: "Semester 3-4: Core Digital Skills",
        topics: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Paid Advertising (Google & Meta Ads)", "Email & Marketing Automation"],
      },
      {
        module: "Semester 5: Analytics & Strategy",
        topics: ["Web & Marketing Analytics", "Conversion Rate Optimization", "Brand Strategy", "Marketing Campaign Planning"],
      },
      {
        module: "Semester 6: Capstone & Industry Project",
        topics: ["Live Client Campaign Management", "Industry Internship", "Portfolio & Placement Preparation"],
      },
    ],
    careerRoles: [
      "Digital Marketing Executive",
      "SEO Analyst",
      "Social Media Manager",
      "Performance Marketing Associate",
      "Content Strategist",
    ],
    faqs: [
      {
        question: "Will I get hands-on experience managing real ad campaigns?",
        answer: "Yes, from Semester 4 onward you'll manage live/simulated campaigns using real budgets and platforms as part of coursework.",
      },
    ],
    accreditation: "Awarded in partnership with a UGC-recognized university under the National Skills Qualification Framework (NSQF).",
    eligibility: "10+2 in any stream from a recognized board.",
    fees: "Contact admissions for current semester-wise fee structure and scholarship eligibility.",
    brochurePath: "/brochures/bvoc-digital-marketing.pdf",
  },
];

export const softwarePackages: Program[] = [
  {
    slug: "autodesk-revit-cad-package",
    type: "package",
    title: "Autodesk Revit & CAD Package",
    shortTitle: "Revit & CAD Package",
    duration: "4 Months",
    tagline: "Become industry-ready on AutoCAD and Revit Architecture/MEP through hands-on drafting and BIM training.",
    overview:
      "An intensive, certification-focused package covering 2D drafting in AutoCAD through to full Building Information Modeling in Revit Architecture and MEP.",
    heroImage: "/images/programs/revit-cad.svg",
    softwareTools: [
      { name: "AutoCAD", iconLabel: "autocad" },
      { name: "Revit Architecture", iconLabel: "revit" },
      { name: "Revit MEP", iconLabel: "revit" },
    ],
    highlights: [
      "Hands-on AutoCAD and Revit training",
      "Certificate of Completion from AET",
      "Hands-on project-based sessions",
      "Ideal for architecture, engineering & construction roles",
    ],
    curriculum: [
      {
        module: "Module 1: AutoCAD Essentials",
        topics: ["2D Drafting & Annotation", "Layers, Blocks & Templates", "Working Drawings & Layouts"],
      },
      {
        module: "Module 2: Revit Architecture",
        topics: ["BIM Fundamentals", "Modeling Walls, Floors, Roofs", "Families & Components", "Documentation & Sheets"],
      },
      {
        module: "Module 3: Revit MEP",
        topics: ["HVAC, Electrical & Plumbing Systems", "Clash Detection Basics", "MEP Documentation"],
      },
      {
        module: "Module 4: Capstone Project",
        topics: ["End-to-End Building Model", "Presentation & Portfolio Drawing Set"],
      },
    ],
    careerRoles: [
      "CAD Draftsman",
      "BIM Modeler",
      "Junior Architect",
      "MEP Coordinator",
      "Site Engineer (Design Support)",
    ],
    faqs: [
      {
        question: "Do I get an Autodesk certification after this package?",
        answer: "AET issues a certificate of completion. Learners can also explore external Autodesk certification exams separately, subject to their eligibility requirements.",
      },
    ],
    certificationBody: "Certificate of Completion — AET School of Design",
    eligibility: "Open to students, graduates and working professionals in architecture/engineering fields.",
    fees: "Contact admissions for current fee structure and batch schedule.",
  },
  {
    slug: "gen-ai-creative-tech-package",
    type: "package",
    title: "Gen AI & Creative Tech Package",
    shortTitle: "Gen AI & Creative Tech",
    duration: "2 Months",
    tagline: "Learn to create, ideate and automate with Midjourney, Stable Diffusion and AI-powered creative workflows.",
    overview:
      "A fast-track, future-focused package teaching prompt engineering and generative AI tools for creative professionals — from AI image generation to using ChatGPT for content, design and workflow automation.",
    heroImage: "/images/programs/gen-ai.svg",
    softwareTools: [
      { name: "Midjourney", iconLabel: "midjourney" },
      { name: "Stable Diffusion", iconLabel: "stablediffusion" },
      { name: "ChatGPT", iconLabel: "chatgpt" },
      { name: "AI Prompting Tools", iconLabel: "prompt" },
    ],
    highlights: [
      "Hands-on with Midjourney & Stable Diffusion",
      "Practical prompt engineering frameworks",
      "AI workflow automation for creative teams",
      "Certificate of Completion from AET",
    ],
    curriculum: [
      {
        module: "Module 1: Foundations of Generative AI",
        topics: ["How Generative AI Models Work", "Ethics & Responsible AI Use", "AI Tool Landscape Overview"],
      },
      {
        module: "Module 2: AI Image Generation",
        topics: ["Midjourney Prompt Engineering", "Stable Diffusion & Custom Models", "Image-to-Image Workflows"],
      },
      {
        module: "Module 3: AI for Productivity & Content",
        topics: ["ChatGPT for Creative Workflows", "AI Copywriting & Ideation", "Automating Repetitive Creative Tasks"],
      },
      {
        module: "Module 4: Capstone Project",
        topics: ["AI-Assisted Creative Campaign", "Portfolio Piece Using Gen AI Tools"],
      },
    ],
    careerRoles: [
      "AI Content Creator",
      "Prompt Engineer",
      "Creative Technologist",
      "Digital Design Assistant",
      "AI-Augmented Marketing Associate",
    ],
    faqs: [
      {
        question: "Do I need a design or tech background for this package?",
        answer: "No. This package is beginner-friendly and is designed for creatives, marketers and students who want to add Gen AI skills to their toolkit.",
      },
    ],
    certificationBody: "Certificate of Completion — AET School of Design",
    eligibility: "Open to students, working professionals and creative freelancers. No prior AI experience required.",
    fees: "Contact admissions for current fee structure and batch schedule.",
  },
  {
    slug: "data-science-ai-package",
    type: "package",
    title: "Data Science & AI Package",
    shortTitle: "Data Science & AI",
    duration: "5 Months",
    tagline: "Get job-ready with Python, SQL, Machine Learning and Power BI in one intensive package.",
    overview:
      "A career-focused short-term program covering the practical data science toolkit — Python programming, SQL, machine learning fundamentals, and business intelligence dashboards — aimed at graduates and professionals seeking a quick, applied upskilling path.",
    heroImage: "/images/programs/data-science-ai.svg",
    softwareTools: [
      { name: "Python", iconLabel: "python" },
      { name: "SQL", iconLabel: "sql" },
      { name: "Machine Learning (Scikit-learn)", iconLabel: "sklearn" },
      { name: "Power BI", iconLabel: "powerbi" },
    ],
    highlights: [
      "Beginner to job-ready in 5 months",
      "Real dataset projects every module",
      "Resume & interview preparation included",
      "Certificate of Completion from AET",
    ],
    curriculum: [
      {
        module: "Module 1: Python for Data Science",
        topics: ["Python Fundamentals", "NumPy & Pandas", "Data Cleaning & Wrangling"],
      },
      {
        module: "Module 2: SQL & Databases",
        topics: ["Relational Database Concepts", "Writing Complex Queries", "Joins & Aggregations"],
      },
      {
        module: "Module 3: Machine Learning",
        topics: ["Regression & Classification", "Model Evaluation", "Intro to Clustering"],
      },
      {
        module: "Module 4: Business Intelligence & Capstone",
        topics: ["Power BI Dashboards", "Storytelling with Data", "Capstone Project & Portfolio"],
      },
    ],
    careerRoles: [
      "Data Analyst",
      "Business Intelligence Executive",
      "Junior ML Engineer",
      "Reporting & Insights Analyst",
    ],
    faqs: [
      {
        question: "Is this package suitable for working professionals switching careers?",
        answer: "Yes, this package is specifically designed for graduates and working professionals looking for a fast, applied path into data roles, with flexible batch timings.",
      },
    ],
    certificationBody: "Certificate of Completion — AET School of Design",
    eligibility: "Graduates or final-year students from any stream; basic computer literacy required.",
    fees: "Contact admissions for current fee structure and batch schedule.",
  },
  {
    slug: "interior-design-3d-spatial-package",
    type: "package",
    title: "Interior Design & 3D Spatial Package",
    shortTitle: "Interior Design & 3D Spatial",
    duration: "4 Months",
    tagline: "Master the complete interior visualization stack: AutoCAD, SketchUp, 3ds Max, V-Ray and Revit.",
    overview:
      "A software-focused package for aspiring interior designers and visualizers who want deep, hands-on mastery of the industry's core design and rendering tools.",
    heroImage: "/images/programs/interior-3d.svg",
    softwareTools: [
      { name: "AutoCAD", iconLabel: "autocad" },
      { name: "SketchUp", iconLabel: "sketchup" },
      { name: "3ds Max", iconLabel: "3dsmax" },
      { name: "V-Ray", iconLabel: "vray" },
      { name: "Autodesk Revit", iconLabel: "revit" },
    ],
    highlights: [
      "Hands-on design and visualization software training",
      "Covers full visualization pipeline end-to-end",
      "Photorealistic rendering with V-Ray",
      "Certificate of Completion from AET",
    ],
    curriculum: [
      {
        module: "Module 1: 2D Drafting (AutoCAD)",
        topics: ["Layout & Floor Plans", "Sections & Elevations", "Working Drawings"],
      },
      {
        module: "Module 2: 3D Modeling (SketchUp & 3ds Max)",
        topics: ["Conceptual 3D Modeling", "Detailed Interior Modeling", "Materials & Texturing"],
      },
      {
        module: "Module 3: Rendering (V-Ray)",
        topics: ["Lighting Setups", "Photorealistic Rendering", "Post-Production for Renders"],
      },
      {
        module: "Module 4: BIM with Revit & Capstone",
        topics: ["Revit Basics for Interiors", "End-to-End Project Visualization", "Portfolio Presentation"],
      },
    ],
    careerRoles: [
      "3D Visualizer",
      "Interior Design Assistant",
      "Rendering Artist",
      "CAD & BIM Executive",
    ],
    faqs: [
      {
        question: "Is this the right package if I already have a design degree?",
        answer: "Yes, this package is popular with design graduates who want to specialize deeply in the software/visualization side of interior design.",
      },
    ],
    certificationBody: "Certificate of Completion — AET School of Design",
    eligibility: "Open to design students, graduates and working professionals.",
    fees: "Contact admissions for current fee structure and batch schedule.",
  },
];

export const allPrograms: Program[] = [...bvocPrograms, ...softwarePackages];

export function getProgramBySlug(slug: string): Program | undefined {
  return allPrograms.find((program) => program.slug === slug);
}

export const generalFaqs: ProgramFAQGeneral[] = [
  {
    question: "Is financial assistance or EMI available for course fees?",
    answer:
      "Yes, AET offers flexible EMI plans and need-based scholarships for eligible students on both B.Voc degrees and software packages. Speak with our counseling team for details specific to your chosen program.",
  },
  {
    question: "Are the B.Voc degrees recognized for further studies and government jobs?",
    answer:
      "Yes, our B.Voc degrees are awarded through university partnerships under the National Skills Qualification Framework (NSQF), making them valid for further academic progression and recognized employment.",
  },
  {
    question: "How does AET keep its software training industry-relevant?",
    answer:
      "Our programs combine practical projects, current software workflows and portfolio development to help students build career-ready skills.",
  },
  {
    question: "Does AET provide placement assistance after course completion?",
    answer:
      "Yes, all B.Voc programs and most software packages include resume building, mock interviews, and placement support through our industry hiring partner network.",
  },
  {
    question: "Can I switch between a B.Voc degree and a short-term software package?",
    answer:
      "Absolutely. Many students start with a short-term software package to explore a field before committing to a full 3-year B.Voc degree. Our counselors can help you plan the right path.",
  },
];
