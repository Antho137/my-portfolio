"use client";
import Navbar from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <main className="">
       <Navbar />
       <About />
       <Skills />
       <Experiences />
       <Projects />
       <Contact />
       <Footer />
      </main>
    </div>
  );
}
