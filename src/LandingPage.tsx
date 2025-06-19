import Hero from "./Hero";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignUpModal";
import { useState } from "react";
import { Header } from "./Header";
import NewsSection from "./NewsSection";
import {TradingView} from "./TradingViewWidget";
import {Footer} from "./Footer";
import Testimonials from "./Testimonials"

function LandingPage() {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

  return (
    <>
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )}
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header
          onLogin={() => setModal("login")}
          onSignup={() => setModal("signup")}
        />{" "}
        <Hero />
          <NewsSection/>
          <TradingView/>
          <Testimonials/>
          <Footer/>
      </div>
    </>
  );
}

export default LandingPage;
