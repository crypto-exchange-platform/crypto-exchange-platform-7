import Hero from "./Hero";
import Header from "./Header";
function LandingPage() {

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header/>
      <Hero/>
    </div>
  );
}

export default LandingPage; 