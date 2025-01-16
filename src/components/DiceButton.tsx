import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DiceButtonProps {
  sides: number;
  onClick: () => void;
}

export function DiceButton({ sides, onClick }: DiceButtonProps) {
  const getDiceImage = (sides: number) => {
    switch (sides) {
      case 4:
        return (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2L2 12H22L12 2Z" fill="currentColor" fillOpacity="0.2"/>
          </svg>
        );
      case 6:
        return (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
            <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
            <circle cx="16" cy="8" r="1.5" fill="currentColor"/>
            <circle cx="8" cy="16" r="1.5" fill="currentColor"/>
            <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
          </svg>
        );
      case 8:
        return (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 9L2 15L12 22L22 15V9L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2L2 9H22L12 2Z" fill="currentColor" fillOpacity="0.2"/>
          </svg>
        );
      case 10:
        return (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 9V15L12 22L21 15V9L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2L3 9L12 15L21 9L12 2Z" fill="currentColor" fillOpacity="0.2"/>
          </svg>
        );
      case 12:
        return (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2L4 7H20L12 2Z" fill="currentColor" fillOpacity="0.2"/>
          </svg>
        );
      case 20:
        return (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 8L3 16L12 22L21 16V8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2L3 8L12 14L21 8L12 2Z" fill="currentColor" fillOpacity="0.2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "relative flex h-24 w-full flex-col items-center justify-center gap-2",
        "bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
        "text-white transition-all hover:scale-105"
      )}
    >
      {getDiceImage(sides)}
      <span className="font-bold">d{sides}</span>
    </Button>
  );
}