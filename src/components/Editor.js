import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const Editor = ({ language, value, onChange }) => {
  const extensions = [];

  if (language === "html") extensions.push(html());
  if (language === "css") extensions.push(css());
  if (language === "javascript") extensions.push(javascript());

  return (
    <CodeMirror
      value={value}
      height="200px"
      theme={dracula}
      extensions={extensions}
      onChange={(val) => onChange(val)}
    />
  );
};

export default Editor;
