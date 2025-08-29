import React from "react";

// Import only mobile component
import IndexMobile from "./Index-mobile";

export default function Index() {
  return (
    <div className="mobile-version">
      <IndexMobile />
    </div>
  );
}
