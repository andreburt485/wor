import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RibbonExtendedTest() {
  const plan = {
    name: "Websites", 
    price: "$150",
    maxPrice: "$500",
    popular: true,
    gradient: "from-blue-500/40 to-cyan-500/40",
    perks: [
      "Modern responsive design",
      "Custom development", 
      "SEO optimized",
      "Mobile-first approach"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8 flex items-center justify-center">
      <div className="max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-8">Extended 3D Ribbon</h1>
        
        <div className={cn(
          "mobile-premium-card mobile-tilt-card p-6 rounded-xl relative",
          plan.popular && "ring-2 ring-blue-500/50 mt-4 overflow-hidden",
          !plan.popular && "overflow-hidden",
        )}>
          <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-40`} />

          {plan.popular && (
            <div className="corner-ribbon">
              <span>
                <Star className="w-3 h-3 inline mr-1" />
                Popular
              </span>
            </div>
          )}

          <div className="text-center mb-6 relative z-10">
            <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-3xl font-bold">
                {plan.price}
              </span>
              <span className="text-sm text-muted-foreground ml-1">
                {" "} - {plan.maxPrice}
              </span>
            </div>
          </div>

          <div className="space-y-3 mb-6 relative z-10">
            {plan.perks.map((perk, i) => (
              <div key={i} className="flex items-center">
                <div className="w-4 h-4 bg-green-400 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm">{perk}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-4 rounded-lg font-semibold transition-all duration-300 relative z-10 bg-blue-600 text-white hover:bg-blue-700">
            Choose Plan
          </button>
        </div>
        
        <p className="text-center text-sm text-gray-600 mt-4">
          The left side of the ribbon now extends further and gets cut off by the card boundary!
        </p>
      </div>
    </div>
  );
}
