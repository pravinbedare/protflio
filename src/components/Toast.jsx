import React, { useEffect } from 'react';
import { CheckCircle, Info, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1100 }}>
      <div className="custom-toast show d-flex align-items-center justify-content-between p-3" role="alert">
        <div className="d-flex align-items-center gap-2">
          {type === 'success' ? (
            <CheckCircle size={18} className="text-info flex-shrink-0" />
          ) : (
            <Info size={18} className="text-warning flex-shrink-0" />
          )}
          <span className="toast-message-text">{message}</span>
        </div>
        <button
          type="button"
          className="btn-close-toast ms-3"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
