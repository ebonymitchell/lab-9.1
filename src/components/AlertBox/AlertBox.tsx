
import type { AlertBoxProps } from "../../types";

export function AlertBox({
  type,
  message,
  onClose,
  children,
}: AlertBoxProps) {
  return (
    <div role="alert" className={`alert alert-${type}`}>
      {/* Display the alert message. */}
      <p>{message}</p>

      {/* Only display the close button when onClose is provided. */}
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Close alert">
          ×
        </button>
      )}

      {/* Display any additional content passed by the parent. */}
      {children}
    </div>
  );
}
