import CardLojas from "../CardLojas";
import "./style.css";
export default function TerceiraSecao() {
  return (
    <section className="terceira-secao">
      <h2>Lojas Física</h2>
      <p>NOSSAS LOJAS FÍSICAS</p>
      <div>
        <CardLojas
          endereco="Avenida Paulista n°1000"
          nomeLoja="Girê Parfum"
          img="/fachada-loja.jpg"
        />
        <CardLojas
          endereco="Avenida Paulista n°1101"
          nomeLoja="Girê Parfum"
          img="/fachada-loja.jpg"
        />
        <CardLojas
          endereco="Avenida Paulista n°1202"
          nomeLoja="Girê Parfum"
          img="/fachada-loja.jpg"
        />
      </div>
    </section>
  );
}
