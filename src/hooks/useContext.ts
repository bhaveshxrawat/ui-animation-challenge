import { use } from "react";

export function useContext<T>(context: React.Context<T | null>, name: string) {
  const usedContext = use(context);
  if (usedContext === null)
    throw new Error(`Must use this under ${name} context.`);
  return usedContext;
}
