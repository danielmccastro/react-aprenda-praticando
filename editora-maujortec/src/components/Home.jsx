import React from "react";

const Home = () => {
  return (
   <>
   <h2>Ultimos lancamentos</h2>
   <div className="card">
    <div className="thumb">
        <img src="/imagens/capas/9788575228142.jpg" alt="" />
    </div>
    <div className="detalhes">
        <h3>Padroes para Kubernetes</h3>
        <p>O modo como os...</p>
        <a href="#">Leia mais &gt/</a>
    </div>
   </div>
   <div className="card">
    <div className="thumb">
        <img src="/imagens/capas/9788575228074.jpg" alt="" />
    </div>
    <div className="detalhes">
        <h3>Introducao ao Pentest - 2a Edicao</h3>
        <p>Introducao ao Pentest...</p>
        <a href="#">Leia mais &gt/</a>
    </div>
   </div>
   </>
  );
};

export default Home;
