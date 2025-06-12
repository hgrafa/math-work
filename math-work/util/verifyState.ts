import { states } from "@/model/data";
import { StateRange } from "@/model/state";

export function findInStates(plate: string) {
  plate = plate.trim().toUpperCase();
  const mercosulRegex = /^[A-Z]{3}\d[A-Z]\d{2}$/;

  if (!mercosulRegex.test(plate)) return "Placa inválida";

  // percorre estados e ranges
  for (const { state, ranges } of states) {
    for (const range of ranges) {
      if (isInRange(range, plate)) {
        return { state, range };
      }
    }
  }

  return "Fora dos previstos";
}

function isInRange({ start, end }: StateRange, code: string) {
  code = code.toUpperCase();
  start = start.toUpperCase();
  end = end.toUpperCase();
  return code >= start && code <= end;
}
