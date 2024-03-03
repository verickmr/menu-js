import { useState } from "react";
import hastaurante from "./assets/hashtaurante.webp";
import Nav from "./components/Nav";
import Item from "./components/ItemMenu";
import {pratosPrincipais, sobremesas, bebidas} from "./cardapio"
import "./App.css";

function App() {
  const pages = [pratosPrincipais, sobremesas, bebidas]
  const [pageOn, setPageOn] = useState(0)

  return (
    <>
      <img src={hastaurante} alt="" className="capa" />
      <Nav setPageOn={setPageOn}/>
      <div className="menu">
        {pages[pageOn].map((item) => <Item name={item.nome} description={item.descricao}
        price={item.preco} img={item.imagem}
        />)}
      </div>
    </>
  );
}

export default App;
