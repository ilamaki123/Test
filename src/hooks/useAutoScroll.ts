import { RefObject, useEffect } from 'react';

export function useAutoScroll<T extends HTMLElement>(
  ref: RefObject<T>,
  dependency: unknown
): void {
  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    element.scrollTop = element.scrollHeight;
  }, [dependency, ref]);
}
