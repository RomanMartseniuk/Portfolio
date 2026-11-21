/** Content of the About section and the tagline band under it. */
export const about = {
  kicker: "About me",
  title: "A developer who likes to understand how things work.",
  image: {
    src: "/images/desk.png",
    width: 282,
    height: 376,
    alt: "Developer desk with two monitors showing code and a keyboard",
    caption: "Where the code gets written",
  },
  // The first paragraph is rendered larger
  paragraphs: [
    "Hi! I’m Roman, a full stack developer specializing in React, TypeScript and Node.js, with 2+ years of commercial experience. I’ve worked independently and in a team, from building applications from scratch to improving and modernizing existing systems.",
    "I focus on writing clean, maintainable code, solving real business challenges and growing my skills through complex end to end projects. I have an engineering background, enjoy solving problems and pay close attention to technical details.",
    "I value clear communication, attention to detail and a thoughtful development process. I enjoy working with designers, developers and clients to turn ideas into well crafted, reliable solutions, and I’m always open to new challenges and chances to grow through meaningful projects.",
  ],
  facts: [
    { label: "Location", value: "Vinnytsia, Ukraine" },
    { label: "Experience", value: "2+ years, commercial" },
    { label: "Education", value: "Computer engineering, VNTU" },
    { label: "Stack", value: "React, TypeScript, Node.js" },
  ],
  tagline:
    "I enjoy creating things from scratch: designing logic, solving problems and turning ideas into interactive digital products.",
} as const;
