import { createContext, useContext, useRef, useEffect } from "react";

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchViewport = window.matchMedia("(max-width: 768px)").matches;

    if (prefersReducedMotion || isTouchViewport) {
      return undefined;
    }

    let frameId;
    let lenis;
    let isMounted = true;

    import("@studio-freight/lenis").then(({ default: Lenis }) => {
      if (!isMounted) return;

      lenis = new Lenis({
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      lenisRef.current = lenis;

      const raf = (time) => {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      };

      frameId = requestAnimationFrame(raf);
    });

    return () => {
      isMounted = false;
      if (frameId) cancelAnimationFrame(frameId);
      if (lenis) lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
};
