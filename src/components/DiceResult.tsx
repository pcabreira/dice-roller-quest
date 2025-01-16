import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface DiceResultProps {
  result: number | null;
  sides: number | null;
}

export function DiceResult({ result, sides }: DiceResultProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (result) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  if (!result || !sides) return null;

  return (
    <div className="text-center">
      <div
        className={cn(
          "mb-2 text-4xl font-bold text-purple-600",
          animate && "animate-roll"
        )}
      >
        {result}
      </div>
      <div className="text-sm text-gray-500">d{sides}</div>
    </div>
  );
}