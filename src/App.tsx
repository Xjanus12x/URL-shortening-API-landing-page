import HeroSection from "./components/HeroSection";
import URLShortenerForm from "./components/URLShortenerForm";
import URLShortenerResults from "./components/URLShortenerResults";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="max-w-[75rem] mx-auto">
        <Nav />
        <HeroSection />
      </div>

      <div className="bg-neutral-lightGrayishBlue">
        <div className="space-y-5">
          <URLShortenerForm />
          <URLShortenerResults />
        </div>
        <Features />
      </div>
      <Footer />
    </>
  );
}

export default App;
