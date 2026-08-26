import { Background } from "@/components/Background";
import { Community } from "@/components/Community";
import { Contact } from "@/components/Contact";
import { EducationCerts } from "@/components/EducationCerts";
import { Engagements } from "@/components/Engagements";
import { Experience } from "@/components/Experience";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Reveal } from "@/components/Reveal";
import { Skills } from "@/components/Skills";
import { Writeups } from "@/components/Writeups";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <FadeIn>
          <Hero />
        </FadeIn>
        <Reveal>
          <Background />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <EducationCerts />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Engagements />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Community />
        </Reveal>
        <Reveal>
          <Gallery />
        </Reveal>
        <Reveal>
          <Writeups />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
