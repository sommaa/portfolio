import {
  backend,
  creator,
  mobile,
  web,
  git,
  tailwind,
  matlab,
  python,
  cpp,
  blender,
  bash,
  openfoam,
  reactjs,
  neovim,
  spray,
  emulsions,
  opensmoke,
  mantis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Matlab and Python developer",
    icon: web,
  },
  {
    title: "Wasting time master",
    icon: mobile,
  },
  {
    title: "Aesthetic enthusiast",
    icon: backend,
  },
  {
    title: "CFD amateur",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Matlab",
    icon: matlab,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "OpenFoam",
    icon: cpp,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "OF",
    icon: openfoam,
  },

  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "React",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "neovim",
    icon: neovim,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Spray Dryer Model",
    description:
      "One dimensional model for co-current Sray-Dryer, improved from SuperChem group at Politecnico of Milan trough OpenFoam 3d analisys model",
    tags: [
      {
        name: "Matlab",
        color: "blue-text-gradient",
      },
      {
        name: "OpenFoam",
        color: "green-text-gradient",
      },
    ],
    image: spray,
    source_code_link: "https://github.com/sommaa/spray_dryer",
  },
  {
    name: "Pickering Emulsion Models",
    description:
      "Mathematical models to predict shape size and behavior of pickering emulsions in Matlab",
    tags: [
      {
        name: "Matlab",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: emulsions,
    source_code_link: "https://github.com/sommaa/pickering_emulsions",
  },
  {
    name: "Mantis",
    description:
      "A set of config files to personalize your i3wm, and the a great part of the most used apps: Neovim, shell, firefox, polybar, app launcher etc... Everything with a common colorscheme!",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Lua",
        color: "green-text-gradient",
      },
      {
        name: "Shell",
        color: "pink-text-gradient",
      },
    ],
    image: mantis,
    source_code_link: "https://github.com/sommaa/Mantis",
  },

  {
    name: "IDT model with OSpp",
    description:
      "Correlation and script to fit ignition delay times of fuels with NTC region in matlab and OpenSmoke, a opensource tool developed by CRECK modeling group.",
    tags: [
      {
        name: "Matlab",
        color: "blue-text-gradient",
      },
      {
        name: "OpenSmoke",
        color: "green-text-gradient",
      },
    ],
    image: opensmoke,
    source_code_link: "https://github.com/sommaa/IDT_OSpp",
  },
];

export { services, technologies, testimonials, projects };
