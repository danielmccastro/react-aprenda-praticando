import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Principal from "./components/Principal";
import Rodape from "./components/Rodape";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";

// a forma de criar rotas difere do livro por causa da versao do react-router-dom;

class App extends Component {
  render() {
    return (
      <Router>
        <>
        <Topo />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/frontend" element={<Frontend />}/>
          <Route exact path="/programacao" element={<Programacao />}/>
          <Route exact path="/design" element={<Design />}/>
          <Route exact path="/catalogo" element={<Catalogo />}/>
          <Route path="*" element={NotFound} />
        </Routes>
        </>
      </Router>
    )
  }
}

export default App;
