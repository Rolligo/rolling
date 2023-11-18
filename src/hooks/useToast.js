import { useState } from "react";
import Toasts from "components/Toasts";
import CopyToClipboard from "components/Toasts/CopyToClipboard";

const TOASTS = {
  copyToClipboard: <CopyToClipboard />,
};

function useToast(wait) {
  const [Toast, setToast] = useState(null);

  const closeToast = () => {
    setToast(null);
  };

  const toggleToast = (toast) => {
    if (!toast) {
      setToast(null);
      return;
    }

    if (Toast) return;

    const newToast = createToast(TOASTS[toast], closeToast);
    setToast(newToast);

    setTimeout(() => {
      setToast(null);
    }, wait);
  };

  return [Toast, toggleToast];
}

function createToast(Toast, closeToast) {
  return <Toasts closeToast={closeToast}>{Toast}</Toasts>;
}

export default useToast;
