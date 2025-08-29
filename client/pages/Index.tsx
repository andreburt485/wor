import React from "react";

// Import both components
import IndexMobile from "./Index-mobile";
import IndexDesktop from "./Index-desktop";

export default function Index() {
  return (
    <>
      {/* Mobile version - visible on mobile devices only (≤768px) */}
      <div className="mobile-version">
        <IndexMobile />
      </div>

      {/* Desktop version - visible on larger screens (>768px) - NO simple view toggle */}
      <div className="desktop-version">
        <IndexDesktop />
      </div>
    </>
  );
}
