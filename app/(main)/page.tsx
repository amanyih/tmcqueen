import {
  About,
  FAQ,
  Features,
  Hero,
  HowItWorks,
  ScrollToTop,
  Services,
  Statistics,
} from "@/components/feature";
import { Gauge } from "../../components/feature";

export default function Home() {
  return (
    <main className="px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
      <Hero />
      <Statistics />
      <About />
      <HowItWorks />
      <Features />
      {/* <Services /> */}
      <FAQ />
      <ScrollToTop />
    </main>
  );
}
