import BookNow from "./components/BookNow";
import BrandSection from "./components/BrandSection";
import CircleFeatures from "./components/CircleFeatures";
import CtaFooter from "./components/CtaFooter";
import EyeCare from "./components/EyeCare";
import Faq from "./components/Faq";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import OurLenses from "./components/OurLenses";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <CircleFeatures />
      <EyeCare />
      <OurLenses />
      <BrandSection />
      <BookNow />
      <CtaFooter />
      <Faq />
    </>
  );
}

export default App;
