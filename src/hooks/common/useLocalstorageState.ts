import { Dispatch, SetStateAction, useEffect, useState } from "react";


export const useLocalstorageState = <V>(
  key: string,
  initialValue: V | (() => V)
) => {
  const [value, setValue] = useState<V>(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedValue = window.localStorage.getItem(key);
      if (!!savedValue) {
        return JSON.parse(savedValue);

      } else {

        if (typeof initialValue === "function") {
          return (initialValue as () => V)()
        } else {
          return initialValue;
        }

      }
    }
    
    return initialValue;
  });

  useEffect(() => {
    if (window.localStorage)
      window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as [V, Dispatch<SetStateAction<V>>];
};