import React, { useState, useEffect } from "react";
import { useScreenSize } from "@/hooks/use-screen-size";
import IndexMobile from "./Index-mobile";

// Import the original desktop component content directly
import {
  motion,
  AnimatePresence,
  useAnimation,
  useReducedMotion,
} from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { RetroToggle } from "@/components/ui/retro-toggle";
import { useTheme } from "@/hooks/use-theme";
import { useRetroMode } from "@/hooks/use-retro-mode";
import { useUnifiedNotifications } from "@/components/ui/unified-notification";
import { useBrowserDetection } from "@/hooks/use-browser-detection";

// Desktop component (simplified version of original)
function IndexDesktop() {
  // Import the desktop component logic here to avoid lazy loading issues
  const DesktopComponent = React.lazy(() => import("./Index-desktop"));

  return (
    <React.Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-muted-foreground">Loading Desktop Version...</p>
        </div>
      </div>
    }>
      <DesktopComponent />
    </React.Suspense>
  );
}

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
  const { isMobile, windowWidth } = useScreenSize();
  const [isClient, setIsClient] = useState(false);

  // Ensure component only renders on client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading during SSR/hydration
  if (!isClient) {
    return <LoadingSpinner />;
  }

  // Use simple window width check as fallback
  const showMobile = isClient && (isMobile || windowWidth <= 768);

  return (
    <div className="responsive-container">
      {/* Mobile version - only show on mobile devices (≤768px) */}
      <div className={`mobile-version ${showMobile ? 'block' : 'hidden'}`}>
        <IndexMobile />
      </div>

      {/* Desktop/Tablet version - show on larger screens (>768px) */}
      <div className={`desktop-version ${!showMobile ? 'block' : 'hidden'}`}>
        <IndexDesktop />
      </div>
    </div>
  );
}
