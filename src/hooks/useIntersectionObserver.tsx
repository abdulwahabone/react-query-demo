import React, { RefObject } from 'react';

interface IObserver {
  threshold?: number;
  rootMargin?: string;
  enabled: boolean;
  target: RefObject<HTMLElement>;
  onIntersect: () => void;
  root?: RefObject<HTMLElement>;
}

const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true,
}: IObserver) => {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      },
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.current, enabled]);
};

export default useIntersectionObserver;
