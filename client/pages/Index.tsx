import React from "react";

// Import both components directly
import IndexMobile from "./Index-mobile";
import IndexDesktop from "./Index-desktop";

export default function Index() {
  return (
    <>
      {/* Mobile version - only visible on mobile devices (≤768px) */}
      <div className="mobile-version">
        <IndexMobile />
      </div>
      
      {/* Desktop/Tablet version - only visible on larger screens (>768px) */}
      <div className="desktop-version">
        <IndexDesktop />
      </div>
      
      {/* CSS to control responsive behavior */}
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
        
        /* Show desktop version ONLY on tablets and larger (>768px) */
        @media (min-width: 769px) {
          .mobile-version {
            display: none !important;
          }
          
          .desktop-version {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
