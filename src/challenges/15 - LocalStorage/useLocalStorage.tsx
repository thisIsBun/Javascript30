import { useEffect, useState } from "react";

const useLocalStorage = <T,>(
  key: string,
  initialData: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState(() => {
    try {
      const items = localStorage.getItem(key);
      return items?.length ? JSON.parse(items) : initialData;
    } catch (e) {
      console.log("Parse error", e);
      return initialData;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log("Failed to save to localStorage", e);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
