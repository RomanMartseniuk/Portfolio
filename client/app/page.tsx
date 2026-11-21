import { About } from "@/components/sections/about/About";
import { Tagline } from "@/components/sections/about/Tagline";
import { Contact } from "@/components/sections/contact/Contact";
import { IdeaBand } from "@/components/sections/contact/IdeaBand";
import { Experience } from "@/components/sections/experience/Experience";
import { Hero } from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/projects/Projects";
import { Stack } from "@/components/sections/stack/Stack";

/**
 * The whole portfolio is one page. Each section is its own component and
 * reads its text from /data, so the page itself is only a list.
 * Header, footer and global effects live in app/layout.tsx.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tagline />
      <Experience />
      <Stack />
      <Projects />
      <IdeaBand />
      <Contact />
    </>
  );
}
