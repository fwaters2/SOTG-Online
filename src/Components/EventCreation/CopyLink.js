import React, { useRef, useState } from "react";

export default function CopyLink({ slug }) {
  const [copySuccess, setCopySuccess] = useState("");
  const slugRef = useRef(null);

  function copyToClipboard(e) {
    slugRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    //e.target.focus();
    setCopySuccess("Copied!");
  }

  return (
    <div>
      {/* Logical shortcut for only displaying the 
          button if the copy command exists */
      document.queryCommandSupported("copy") && (
        <div>
          <button onClick={copyToClipboard}>Copy</button>
          {copySuccess}
        </div>
      )}
      <form>
        <input ref={slugRef} value="http://sotg.online/forrest-tourney" />
      </form>
    </div>
  );
}
