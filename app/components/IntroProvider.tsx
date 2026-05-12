"use client";

import { useEffect, useState } from "react";
import Intro from "../Intro";

export default function IntroProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const introShown = sessionStorage.getItem("introShown");

    if (!introShown) {
      setShowIntro(true);

      const timer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem("introShown", "true");
        setLoading(false);
      }, 2500);

      return () => clearTimeout(timer);
    }

    setLoading(false);
  }, []);

  if (loading && !showIntro) {
    return null;
  }

  return (
    <>
      {showIntro && <Intro />}

      <div
        className={`transition-opacity duration-700 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}