import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
        
          <h1>Dic·tion·ar·y</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          👉{" "}
          <a
            href="https://github.com/Lolah101/Dictionary-App"
            target="_blank"
            rel="noreferrer"
          >
            Open source
          </a>{" "}
          code made by{" "}
          <a
            href="https://www.linkedin.com/in/loza-d-a1a947252/"
            target="_blank"
            rel="noreferrer"
          >
            Loza Daniel
          </a>{" "}
          👈
        </footer>
      </div>
    </div>
  );
}
