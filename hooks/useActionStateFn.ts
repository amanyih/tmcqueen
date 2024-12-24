import { useState, useCallback } from "react";

function useActionStateFn(actionFunction: Function) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [state, setState] = useState<any>(null);

  const execute = useCallback(
    async (...args: any) => {
      setIsLoading(true);
      setIsSuccess(false);
      setState(null);

      const result = await actionFunction(...args);
      if (result.errors) {
        setIsSuccess(false);
      } else {
        setIsSuccess(true);
      }
      setState(result);
      setIsLoading(false);

      return result;
    },
    [actionFunction]
  );

  return { execute, isLoading, isSuccess, state };
}

export default useActionStateFn;
