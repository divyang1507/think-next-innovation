import styles from "./page.module.css";
import Hero from "./pages/Home/Hero";
import './globals.css'
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
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
