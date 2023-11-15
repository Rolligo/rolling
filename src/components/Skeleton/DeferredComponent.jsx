import { useEffect, useState } from "react";

const DEFERRED_MS = 300;

function DeferredComponent({ children }) {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, DEFERRED_MS);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) return null;

  return <>{children}</>;
}

export default DeferredComponent;
