import styles from "./page.module.css";
import Hero from "./sections/Hero";
import './globals.css'
import About from "./sections/About";
import Service from "./sections/Service";
import Contact from "./sections/Contact";
import { Footer } from "./components/Footer/Footer";


export default function Home() {
  // const scroll = new LocomotiveScroll();
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Service />
      <Contact />
     
    </main>
  );
}
