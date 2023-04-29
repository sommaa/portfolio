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
  clichart,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
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
    exp: 4,
  },
  {
    name: "Python",
    icon: python,
    exp: 3,
  },
  {
    name: "OpenFoam",
    icon: cpp,
    exp: 1,
  },
  {
    name: "Blender",
    icon: blender,
    exp: 3,
  },
  {
    name: "OF",
    icon: openfoam,
    exp: 3,
  },

  {
    name: "Bash",
    icon: bash,
    exp: 2,
  },
  {
    name: "React",
    icon: reactjs,
    exp: 2,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
    exp: 3,
  },
  {
    name: "git",
    icon: git,
    exp: 3,
  },
  {
    name: "neovim",
    icon: neovim,
    exp: 3,
  },
];

const testimonials = [];

const projects = [
  {
    name: "Spray Dryer Model from SuPER",
    description:
      "One dimensional model for co-current Sray-Dryer, improved from SuPER group at Politecnico of Milan trough OpenFoam 3d analisys model",
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
      "Mathematical models to predict shape size and behavior of pickering emulsions in Matlab, based on langevin integrator, theoretical models and experimental data",
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
    name: "Ignition Delay Time model with OSpp",
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
  {
    name: "CliChart, a simple chart in python",
    description:
      "CliChart is a simple tool written in python to easily display crypto, indicies, stocks, ... price trends inside your terminal window, it also adapts to your favourite shell theme.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
    ],
    image: clichart,
    source_code_link: "https://github.com/sommaa/CliChart",
  },
];

export { services, technologies, testimonials, projects };
