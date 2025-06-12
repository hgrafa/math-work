"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StateRange } from "@/model/state";
import { countPlates } from "@/util/getNumberofPlates";
import { findInStates } from "@/util/verifyState";
import { useState } from "react";

export default function Home() {
  const [plate, setPlate] = useState("");
  const [state, setState] = useState<string | undefined>(undefined);
  const [range, setStateRange] = useState<StateRange | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  // 1. Só atualiza o valor digitado
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlate(event.target.value);
  };

  // 2. Só faz a busca quando o botão for clicado
  const handleSearch = () => {
    const result = findInStates(plate.trim());

    if (result === "Placa inválida" || result === "Fora dos previstos") {
      setError(result);
      return;
    }

    setError(undefined);
    setStateRange(result.range);
    setState(result.state);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-3">
      <main className="w-full max-w-lg space-y-6">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Easy Plate🪧🚗
        </h1>
        <p className="text-center text-muted-foreground text-xl pb-12">
          Descubra de onde é a placa do seu carro!
        </p>
        <Input
          className="w-full py-5 text-lg"
          type="text"
          placeholder="Digite uma placa para buscar"
          value={plate}
          onChange={handleInputChange}
        />

        <div className="w-full min-h-[2rem] flex items-center justify-center text-2xl font-medium text-gray-700">
          {state ? `📍${state}` : error ? `❌ ${error}` : "-"}
        </div>

        {state && (
          <div className="w-full min-h-[1rem] flex items-center justify-center text-lg font-normal text-gray-700">
            Encontrada entre {range?.start} e {range?.end}, dentre{" "}
            {countPlates(range!)} possibilidades.
          </div>
        )}

        <Button
          className="w-full py-5 text-lg"
          variant="default"
          onClick={handleSearch}
        >
          Buscar placa
        </Button>
      </main>
    </div>
  );
}
