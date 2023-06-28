import React from "react";

import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";

function App() {
  return <table className="tabela">
    <TabelaHead />
    <TabelaBody />
    <TabelaFoot />
  </table>;
}

export default App;
