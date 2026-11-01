import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";

export default function CopyEmailButton() {
  const [status, setStatus] = useState("");
  const timeout = useRef(null);
  useEffect(() => () => clearTimeout(timeout.current), []);
  const copy = async () => {
    clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("Email copied.");
    } catch {
      setStatus("Please select and copy the email address.");
    }
    timeout.current = setTimeout(() => setStatus(""), 4500);
  };
  return (
    <>
      <button
        id="copy-email"
        type="button"
        aria-label="Copy email address"
        onClick={copy}
      >
        Copy email <span aria-hidden="true">⧉</span>
      </button>
      <span id="copy-status" role="status">
        {status}
      </span>
    </>
  );
}
