// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use setTimeout to wait for page content to render
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0); // scroll to top
    }, 50); // 50ms delay is usually enough

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
