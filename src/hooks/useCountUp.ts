import { useEffect, useRef, useState } from "react";

export function useCountUp({ end, duration = 2000, start = 0, trigger = true }) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        ref.current = requestAnimationFrame(step);
      }
    };
    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current);
  }, [end, duration, start, trigger]);

  return value;
}
