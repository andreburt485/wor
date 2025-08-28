import React, { useEffect } from "react";
import { useSimpleView } from "@/hooks/use-simple-view";

// Import both components directly
import IndexMobile from "./Index-mobile";
import IndexDesktop from "./Index-desktop";

export default function Index() {
  const { isSimpleView } = useSimpleView();

  useEffect(() => {
    // Update CSS custom property when simple view changes
    document.documentElement.style.setProperty(
      "--simple-view-display",
      isSimpleView ? "block" : "none",
    );
    document.documentElement.style.setProperty(
      "--desktop-view-display",
      isSimpleView ? "none" : "block",
    );
  }, [isSimpleView]);

  return (
    <>
      {/* Mobile version - visible on mobile devices (≤768px) OR when simple view is toggled on desktop */}
      <div className="mobile-version">
        <IndexMobile />
      </div>

      {/* Desktop/Tablet version - visible on larger screens (>768px) when simple view is OFF */}
      <div className="desktop-version">
        <IndexDesktop />
      </div>
    </>
  );
}
