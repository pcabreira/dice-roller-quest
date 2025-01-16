import { useState } from "react";
import { DiceButton } from "@/components/DiceButton";
import { DiceResult } from "@/components/DiceResult";
import { useToast } from "@/components/ui/use-toast";

const DICE_TYPES = [4, 6, 8, 10, 12, 20];

const Index = () => {
  const [currentResult, setCurrentResult] = useState<number | null>(null);
  const [currentDice, setCurrentDice] = useState<number | null>(null);
  const { toast } = useToast();

  const rollDice = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1;
    setCurrentDice(sides);
    setCurrentResult(result);
    
    toast({
      title: `Rolando d${sides}...`,
      description: `Você tirou ${result}!`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-purple-50 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-purple-600">
          Rolador de Dados
        </h1>
        
        <div className="mb-12">
          <DiceResult result={currentResult} sides={currentDice} />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {DICE_TYPES.map((sides) => (
            <DiceButton
              key={sides}
              sides={sides}
              onClick={() => rollDice(sides)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;