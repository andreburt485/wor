import { useState, useEffect } from "react";

export function useSimpleView() {
  const [isSimpleView, setIsSimpleView] = useState(false);

  useEffect(() => {
    // Check if simple view preference is stored
    const stored = localStorage.getItem("simple-view");
    if (stored) {
      setIsSimpleView(JSON.parse(stored));
    }
  }, []);

  const toggleSimpleView = () => {
    const newValue = !isSimpleView;
    setIsSimpleView(newValue);
    localStorage.setItem("simple-view", JSON.stringify(newValue));
  };

  return {
    isSimpleView,
    toggleSimpleView,
  };
}
