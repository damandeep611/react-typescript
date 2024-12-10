import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AIAccelerationSection from "./components/ui/animation";
import Banner from "./components/ui/Banner";
import Empowering from "./components/ui/Empowering";
import OurBenefits from "./components/ui/OurBenefits";
import PricingSection from "./components/ui/PricingSection";
import Services from "./components/ui/Services";
import SubFooter from "./components/ui/SubFooter";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <OurBenefits />
      <PricingSection />
      <Empowering />
      <AIAccelerationSection />
      <SubFooter />
      <Footer />
    </>
  );
}

export default App;
