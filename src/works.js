import wdsImage from "./assets/wds1.png";
import clmImage from "./assets/clm.png";
import rpcImage from "./assets/rpc.png";
import pwImage from "./assets/pw.png";

const works = [
  {
    title: "Web Drum Sequencer",
    description:
      "Browser-based drum machine built with the web audio API. Uses React and styled components for the UI components and state, while the performance-critical audio tasks are handled in parallel using pure JS.",
    image: wdsImage,
    url: "https://wds-1.com",
    github: "https://github.com/stufreen/web-drum-sequencer",
  },
  {
    title: "Cover Letter Magic",
    description:
      "AI cover letter generator powered by Chat GPT. Applies a generalized large language model to a specific task in a familiar UI. Uses CloudFlare Workers for backend functionality for a lightweight app.",
    image: clmImage,
    url: "https://cover-letter-magic.pages.dev",
    github: "https://github.com/stufreen/cover-letters-web",
  },
  {
    title: "Particle Wave",
    description:
      "3D animation built with Three.js. Thousands of particles are animated in realtime along a sine wave with some randomness added for a beautiful effect.",
    image: pwImage,
    url: "https://stufreen.github.io/particle-wave/",
    github: "https://github.com/stufreen/particle-wave",
  },
  {
    title: "Robin Porter Copy",
    description:
      "Portfolio site for advertising Copywriter/ACD. Built with Astro and Contentful, it can be updated easily without code and is ultra-fast and optimized for search.",
    image: rpcImage,
    url: "https://robinportercopy.ca",
  },
];

export default works;
