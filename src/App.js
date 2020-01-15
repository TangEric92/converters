import React, { useState } from "react";
import "./App.css";
import Rates from "./routes/Rates";
import Temperature from "./routes/Temperature";

function App() {
  const [tab, setTab] = useState(0);

  return (
    <div className="App">
      <header>
        <select value={tab} onChange={e => setTab(parseInt(e.target.value))}>
          <option value={0}>Rates</option>
          <option value={1}>Temperature</option>
        </select>
      </header>
      {tab === 0 && <Rates />}
      {tab !== 0 && <Temperature />}
    </div>
  );
}

export default App;
