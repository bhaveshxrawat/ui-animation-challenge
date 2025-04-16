import { useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement>(handlerEv: () => void) {
  const elRef = useRef<T>(null);
  useEffect(() => {
    const ctrl = new AbortController();
    const { signal } = ctrl;
    document.body.addEventListener(
      "click",
      (e) => {
        if (elRef && elRef.current) {
          if (e.target instanceof Node && elRef.current.contains(e.target))
            return;
          handlerEv();
        }
      },
      { signal, capture: true }
    );
    return () => ctrl.abort();
  }, [handlerEv]);
  return elRef;
}
