import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SampleResults from "@/components/SampleResults";
import HowItWorks from "@/components/HowItWorks";
import MoreTools from "@/components/MoreTools";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <SampleResults />
        <HowItWorks />
        <MoreTools />
        <EmailCapture />
      </main>
      <Footer />
    </div>
  );
}
