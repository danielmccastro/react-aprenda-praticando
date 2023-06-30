import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./index.css";

import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Livro from "./components/Livro";

// a forma de criar rotas difere do livro por causa da versao do react-router-dom;

class App extends Component {
  state = {
    livros: [],
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'>Mensagem de erro</p>"
        );
    }
  }

  render() {
    return (
      <Router>
        <>
          <Topo />
          <Routes>
            <Route exact path="/" element={<Home livros={this.state.livros}/>} />
            <Route exact path="/frontend" element={<Frontend livros={this.state.livros}/>} />
            <Route exact path="/programacao" element={<Programacao livros={this.state.livros}/>} />
            <Route exact path="/design" element={<Design livros={this.state.livros}/>} />
            <Route exact path="/catalogo" element={<Catalogo livros={this.state.livros}/>} />
            <Route path="/livro/:livroSlug" element={props => {
              const livro = this.state.livros.find(
                livro => livro.slug === props.match.params.livroSlug);
                if (livro) return <Livro livro={livro}/>
                else return <NotFound />
            }} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Rodape />
        </>
      </Router>
    );
  }
}

export default App;
