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

  // Leave a link as '' to hide it.
  links: {
    linkedin: 'https://www.linkedin.com/in/daniel-chahine-50a2ab264',
    github: 'https://github.com/DanielChahine004',
    scholar: '', // Google Scholar profile URL
    orcid: 'https://orcid.org/0009-0001-4177-522X',
  },

  intro: 'Engineer and systems thinker, building the tools to see inside the body more clearly.',

  bio: [
    'I’m a PhD candidate at the University of Technology Sydney, researching monolithic PET detectors. I use Monte Carlo optical simulation and information-theoretic bounds to understand how scintillator design choices shape what a detector can actually measure.',
    'Before that, I completed a Bachelor of Engineering (Honours) in Biomedical Engineering at UTS with First Class Honours, making the Dean’s List four years running. Along the way I held research scholarships in quantum hardware at UNSW and neuroimaging machine learning at the University of Sydney’s Brain and Mind Centre, interned on an engineering project for Cochlear, and spent a summer in computational biology at the Garvan Institute.',
    'I think we’re in for a bright future, and I want to help bring it about through intelligent engineering, collaboration and applied systems thinking.',
  ],

  skills: [
    'Monte Carlo simulation (GATE / Geant4)',
    'PyTorch · CUDA',
    'Python · C++',
    'Medical imaging & reconstruction',
    'CAD (Fusion 360, nTop, Shapr3D)',
    'Embedded & PCB design',
  ],

  // Shown at the top of the Education box (both degrees are from UTS).
  educationLogo: { src: '/logos/uts.svg', alt: 'University of Technology Sydney' },
  education: [
    { title: 'PhD, Biomedical Engineering', org: 'University of Technology Sydney', period: '2026 – present' },
    {
      title: 'Bachelor of Engineering (Honours), Biomedical Engineering',
      org: 'University of Technology Sydney',
      period: 'Completed 2026',
      note: 'First Class Honours · Dean’s List',
    },
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
