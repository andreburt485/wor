import { Smartphone, Monitor } from "lucide-react";
import { useSimpleView } from "@/hooks/use-simple-view";
import { useRetroMode } from "@/hooks/use-retro-mode";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SimpleViewToggle() {
  const { isSimpleView, toggleSimpleView } = useSimpleView();
  const { mode } = useRetroMode();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              if (mode === "retro") return; // Disable in retro mode
              console.log(
                "Simple view toggle clicked! Current state:",
                isSimpleView,
              );
              toggleSimpleView();
              console.log("After toggle, new state should be:", !isSimpleView);
            }}
            className={`h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 ${
              mode === "retro"
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white/20 hover:scale-110 cursor-pointer"
            } ${isSimpleView ? "bg-cyan-500/20 border-cyan-400/40" : ""}`}
          >
            {isSimpleView ? (
              <Smartphone className="h-5 w-5 text-cyan-400 transition-all" />
            ) : (
              <Monitor className="h-5 w-5 text-white/80 transition-all" />
            )}
            <span className="sr-only">Toggle view mode</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <span>
            {mode === "retro"
              ? "View toggle disabled in retro mode"
              : isSimpleView
                ? "Switch to desktop view"
                : "Switch to simple view"}
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
