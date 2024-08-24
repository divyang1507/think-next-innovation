// import styles from "./page.module.css";
import Hero from "./sections/Hero";
import "./globals.css";
import About from "./sections/About";
import Service from "./sections/Service";
import Contact from "./sections/Contact";
import BgBlur from "./components/BgBlur";
import { TechMarquee } from "./components/TechMarquee";

export default function Home() {
  // const scroll = new LocomotiveScroll();
  return (
    // <main className={`${styles.main} relative`}>
    <main className="relative">
      <Hero />
      <About />
      <TechMarquee />
      <Service />
      <Contact />
      <div className=" absolute -left-8 -z-50 top-10 bg w-[300px] h-[300px] rounded-full bg-blue-200 blur-3xl"></div>
      <div className=" absolute -right-8 -z-50 top-[450px] bg w-[300px] h-[300px] rounded-full bg-green-200 blur-3xl"></div>
    </main>
  );
}
