import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../context/LenisContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenisRef = useLenis();

  useEffect(() => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;