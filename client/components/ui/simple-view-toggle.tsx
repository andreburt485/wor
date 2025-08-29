import { Smartphone } from "lucide-react";
import { useRetroMode } from "@/hooks/use-retro-mode";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SimpleViewToggle() {
  const { mode } = useRetroMode();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              // Simple view toggle is disabled - only mobile version available
              console.log("Simple view toggle is disabled - mobile version only");
            }}
            className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 opacity-50 cursor-not-allowed bg-cyan-500/20 border-cyan-400/40"
          >
            <Smartphone className="h-5 w-5 text-cyan-400 transition-all" />
            <span className="sr-only">Mobile view only</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <span>Mobile version only - desktop view removed</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
