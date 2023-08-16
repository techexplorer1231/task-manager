import { useEffect, useRef } from "react";

const useFocusInput = () => {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  return firstInputRef;
};

export default useFocusInput;
