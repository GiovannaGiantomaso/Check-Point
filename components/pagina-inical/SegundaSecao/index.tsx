import Image from "next/image";
import "./style.css";
import Button from "../Button";

export default function SegundaSecao() {
  return (
    <section className="segunda-secao">
      <div>
        <h2>Por que comprar na Girê ?</h2>
        <p>
          Na Girê, os consumidores podem esperar uma experiência olfativa excepcional, 
          com uma coleção exclusiva de perfumes cuidadosamente selecionados,
          oferecendo uma variedade de aromas distintos e cativantes.
          Garantimos que todos os nossos perfumes sejam autênticos e genuínos. 
          Trabalhamos diretamente com os fabricantes e fornecedores confiáveis,
          para garantir a qualidade e a procedência de cada fragrância em nossa coleção.
        </p>
      </div>
      
    
      <div className="imagens-container">
        <div className="img-container">
          <Image
            className="img-perfume-chloé"
            src={"/perfume-chloé.PNG"}
            alt="perfume chloé"
            width={700}
            height={700}
          />
        </div>
        <div className="img-container">
          <Image
            className="img-perfume-chloé"
            src={"/perfume-chloé2.PNG"}
            alt="perfume chloé 2"
            width={700}
            height={700}
          />
        </div>
      </div>
      <div className="button-container">
        <Button texto="Sobre nós" link="/sobre" />
      </div>
    </section>
  );
}
