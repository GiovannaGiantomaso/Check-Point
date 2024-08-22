import "./style.css";
import Button from "../Button";
export default function PrimeiraSecao() {
    return (
        <section className="secao-principal">
            <div className="info">
                <h1>Girê: Os melhores perfumes você encontra aqui!</h1>
                <p>
                Descubra uma experiência olfativa única com nossa coleção exclusiva de perfumes, 
                criados para capturar a essência da elegância e sofisticação.
                </p>
                <Button link="/produtos" texto="Ver produtos"/>
            </div>
            
        </section>
        )
}

