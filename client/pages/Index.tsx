import React from "react";
import { useSimpleView } from "@/hooks/use-simple-view";

// Import both components directly
import IndexMobile from "./Index-mobile";
import IndexDesktop from "./Index-desktop";

export default function Index() {
  const { isSimpleView } = useSimpleView();

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

      {/* CSS to control responsive behavior with simple view toggle */}
      <style jsx global>{`
        /* Hide both by default */
        .mobile-version,
        .desktop-version {
          display: none;
        }

        /* Show mobile version ONLY on mobile devices (≤768px) */
        @media (max-width: 768px) {
          .mobile-version {
            display: block !important;
          }

          .desktop-version {
            display: none !important;
          }
        }

        /* On desktop/tablet (>768px), show version based on simple view toggle */
        @media (min-width: 769px) {
          .mobile-version {
            display: ${isSimpleView ? "block" : "none"} !important;
          }

          .desktop-version {
            display: ${isSimpleView ? "none" : "block"} !important;
          }
        }
      `}</style>
    </>
  );
}
