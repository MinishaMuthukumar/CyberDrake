import React, { useState, useEffect } from "react";
import Split from "react-split";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedHtml = localStorage.getItem("html");
    const savedCss = localStorage.getItem("css");
    const savedJs = localStorage.getItem("js");
    const savedTheme = localStorage.getItem("theme");

    if (savedHtml) setHtml(savedHtml);
    if (savedCss) setCss(savedCss);
    if (savedJs) setJs(savedJs);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => { localStorage.setItem("html", html); }, [html]);
  useEffect(() => { localStorage.setItem("css", css); }, [css]);
  useEffect(() => { localStorage.setItem("js", js); }, [js]);
  useEffect(() => { localStorage.setItem("theme", theme); }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

  const runAll = () => {
    setSrcDoc(`
      <html>
        <head><style>${css}</style></head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `);
  };

  const resetEditors = () => {
    setHtml("");
    setCss("");
    setJs("");
    setSrcDoc("");
    localStorage.removeItem("html");
    localStorage.removeItem("css");
    localStorage.removeItem("js");
  };

  const downloadCode = () => {
    const code = `
      <html>
        <head><style>${css}</style></head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
    const blob = new Blob([code], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cyberdrake-code.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} h-screen flex flex-col`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Split className="flex-1 flex" sizes={[50, 50]} minSize={200} gutterSize={5}>
        <div className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} flex flex-col p-2 space-y-4`}>
          <div>
            <h2 className="text-lg font-semibold mb-1">Write your HTML code:</h2>
            <Editor language="html" value={html} onChange={setHtml} />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">Write your CSS code:</h2>
            <Editor language="css" value={css} onChange={setCss} />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">Write your JS code:</h2>
            <Editor language="javascript" value={js} onChange={setJs} />
          </div>

          <div className="flex flex-wrap space-x-2 mt-2">
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded" onClick={runAll}>Run All ▶️</button>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded" onClick={resetEditors}>Reset 🔄</button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded" onClick={downloadCode}>Download ⬇️</button>
          </div>
        </div>

        <div className="p-2">
          <iframe
            srcDoc={srcDoc}
            title="Output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            className="rounded bg-white"
          />
        </div>
      </Split>
    </div>
  );
}

export default App; // ✅ This MUST be here!
