import { useEffect, useReducer } from "react";

const useLocalStorageReducer = (key, reducer, initialState) => {
  const initializer = () => {
    const savedState = localStorage.getItem(key);
    try {
      return savedState ? JSON.parse(savedState) : initialState;
    } catch (e) {
      console.error(`Error parsing"${key}":`, e);
      return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state, initialState]);

  return [state, dispatch];
};

export default useLocalStorageReducer;
