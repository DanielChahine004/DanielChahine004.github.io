// ─────────────────────────────────────────────────────────────
// Everything about "you" lives here. Edit text, links, and
// publications in this file; layouts pick it up automatically.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Daniel Chahine',
  role: 'PhD Candidate · Biomedical Engineering · UTS',
  description:
    'Daniel Chahine — biomedical engineer and PhD candidate at UTS working on monolithic PET detectors, simulation and machine learning.',
  photo: '56298d_81edc6aa33e84ca2b5859844329d53c6~mv2.png',
  location: 'Sydney, Australia',
  email: 'daniel.chahine004@gmail.com',
  resume: '/resume.pdf',
  resumeFilename: 'Daniel-Chahine-CV.pdf', // the name the Download CV button saves it as

  // Leave a link as '' to hide it.
  links: {
    linkedin: 'https://www.linkedin.com/in/daniel-chahine-50a2ab264',
    github: 'https://github.com/DanielChahine004',
    scholar: '', // Google Scholar profile URL
    orcid: 'https://orcid.org/0009-0001-4177-522X',
  },

  // Hero line under the name: what he does first, then the old tagline.
  intro: 'PhD candidate in biomedical engineering at UTS. Engineer and systems thinker, building the tools to see inside the body more clearly.',

  // The PhD itself is described in `research` below, so the bio covers the path here.
  bio: [
    'I graduated in Biomedical Engineering from UTS with First Class Honours, held research scholarships in quantum hardware (UNSW) and neuroimaging AI (University of Sydney), interned on a project for Cochlear, and spent a summer at the Garvan Institute.',
  ],

  skills: [
    'Monte Carlo simulation (GATE / Geant4)',
    'PyTorch · CUDA',
    'Python · C++',
    'Medical imaging & reconstruction',
    'CAD (Fusion 360, nTop, Shapr3D)',
    'Embedded & PCB design',
  ],

  education: [
    // logo: a compact mark shown beside the entry (public/logos/).
    { title: 'PhD, Biomedical Engineering', org: 'University of Technology Sydney', period: '2026 – present', logo: '/logos/uts-mark.svg' },
    {
      title: 'Bachelor of Engineering (Honours), Biomedical Engineering',
      org: 'University of Technology Sydney',
      period: 'Completed 2026',
      note: 'First Class Honours · GPA 6.72/7 · Dean’s List',
      logo: '/logos/uts-mark.svg',
    },
  ],

  // "Current research" section on the home page. Keep it public-level: no unpublished specifics.
  research: {
    intro:
      'My PhD at UTS studies monolithic scintillator detectors for PET: how much information about each gamma-ray event they can capture, and how crystal design affects it.',
    // The broad areas the thesis spans (kept general on purpose, not individual papers).
    areas: [
      { title: 'Simulation', text: 'Monte Carlo modelling of detectors in GATE and Geant4' },
      { title: 'Information theory', text: 'Fundamental limits on what a detector can measure' },
      { title: 'Machine learning', text: 'Learning event positions from detector signals' },
      { title: 'Image reconstruction', text: 'Turning detected events into PET images' },
    ],
  },

  // Logo strip under About: where I've studied and worked, oldest first. Logos live in public/logos/.
  affiliations: [
    { name: 'University of Technology Sydney', logo: '/logos/uts-compact.svg', period: '2022 –', role: 'Biomedical Eng. · PhD' },
    { name: 'OPTIK Engineering Consultancy', logo: '/logos/optik.jpg', period: '2023', role: 'Engineering internship' },
    { name: 'Cochlear', logo: '/logos/cochlear.png', period: '2023', role: 'Client project' },
    { name: 'UNSW Sydney · Sydney Quantum Academy', logo: '/logos/unsw.svg', period: '2024', role: 'Quantum research (SQA scholarship)' },
    { name: 'The University of Sydney', logo: '/logos/usyd.svg', period: '2024 – 25', role: 'Neuroimaging AI' },
    { name: 'Garvan Institute of Medical Research', logo: '/logos/garvan.png', period: '2025 – 26', role: 'Computational biology' },
  ],
};

export const publications = [
  {
    title: 'Voxel-Level Brain States Prediction Using Swin Transformer',
    authors: 'Y. Sun, D. Chahine, Q. Wen, T. Liu, X. Li, Y. Yuan, F. Calamante, J. Lv',
    venue: 'IEEE Journal of Biomedical and Health Informatics, vol. 29, no. 12, pp. 8719–8726, Dec. 2025',
    note: 'Selected for oral presentation at IEEE BHI 2025',
    url: 'https://ieeexplore.ieee.org/document/11283638',
    status: 'Published',
    project: 'usyd-vri',
  },
  {
    // No public preprint yet: add `url` once it's out, and update `venue` and `status` when accepted.
    title: 'PRISM: A Physics-Informed Spatiotemporal CNN for Event Localisation in Nanocomposite Monolithic PET Scintillators',
    authors: 'R. Abraham, D. Chahine, D. R. Franklin',
    venue: 'Submitted to Physics in Medicine & Biology, 2026',
    status: 'Under review',
  },
];
