import { StateRange } from "@/model/state";

export function countPlates({ start, end }: StateRange): number {
  // Converte um código LLL em um número de 0 a 26^3-1
  const codeToIndex = (code: string): number =>
    (code.charCodeAt(0) - 65) * 26 * 26 +
    (code.charCodeAt(1) - 65) * 26 +
    (code.charCodeAt(2) - 65);

  const startIdx = codeToIndex(start);
  const endIdx = codeToIndex(end);

  const prefixCount = endIdx - startIdx + 1;

  const suffixCount = 10 * 26 * 10 * 10; // = 26 000

  return prefixCount * suffixCount;
}
