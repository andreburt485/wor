import React, { useState, useEffect } from "react";
import { useScreenSize } from "@/hooks/use-screen-size";

// Lazy load components for better performance
const IndexDesktop = React.lazy(() => import("./Index-desktop"));
const IndexMobile = React.lazy(() => import("./Index-mobile"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-muted-foreground">Loading KOR Digital...</p>
    </div>
  </div>
);

export default function Index() {
  const { isMobile, screenSize } = useScreenSize();
  const [isClient, setIsClient] = useState(false);

  // Ensure component only renders on client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading during SSR/hydration
  if (!isClient) {
    return <LoadingSpinner />;
  }

  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <div className="responsive-container">
        {/* Mobile version - only show on mobile devices (≤768px) */}
        {isMobile && (
          <div className="mobile-version">
            <IndexMobile />
          </div>
        )}
        
        {/* Desktop/Tablet version - show on larger screens (>768px) */}
        {!isMobile && (
          <div className="desktop-version">
            <IndexDesktop />
          </div>
        )}
      </div>
      
      {/* CSS to ensure proper responsive behavior */}
      <style jsx>{`
        .responsive-container {
          width: 100%;
          height: 100%;
        }
        
        .mobile-version {
          display: block;
        }
        
        .desktop-version {
          display: block;
        }
        
        /* Ensure mobile version is never shown on larger screens */
        @media (min-width: 769px) {
          .mobile-version {
            display: none !important;
          }
        }
        
        /* Ensure desktop version is never shown on mobile */
        @media (max-width: 768px) {
          .desktop-version {
            display: none !important;
          }
        }
      `}</style>
    </React.Suspense>
  );
}
