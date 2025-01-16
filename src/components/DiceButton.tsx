import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DiceButtonProps {
  sides: number;
  onClick: () => void;
  className?: string;
}

export function DiceButton({ sides, onClick, className }: DiceButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "relative h-24 w-24 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 p-0 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl",
        className
      )}
    >
      <span className="text-2xl font-bold">d{sides}</span>
    </Button>
  );
}