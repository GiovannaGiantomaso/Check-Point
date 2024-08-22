import ProductCard from "../../../components/ProductCard";
export default function Produtos() {
    return (
        <main>
            <section className="flex flex-col flex-wrap justify-center items-center">
                <h1 className="text-3xl mb-6">Os Perfumes mais comprados</h1>
                <div className="flex flex-wrap w-11/12 justify-center">
                <ProductCard
                    img="/egeo.jpg"
                    title="Egeo"
                    price={120}
                    description="Barato e cheiroso" />
                <ProductCard
                    img="/chanel.jpg"
                    title="Chanel"
                    price={900}
                    description="Chique e sofisticado" />

                <ProductCard
                    img="/opium.jpg"
                    title="Opium"
                    price={250}
                    description="O mais diferente" />
                <ProductCard
                    img="/obsessed.jpg"
                    title="Obsessed"
                    price={320}
                    description="O melhor da virginia" />

                <ProductCard
                    img="/sauvage.jpg"
                    title="Sauvage"
                    price={210}
                    description="O mais sensual da linha masculina" />
                <ProductCard
                    img="/hipnotic.jpg"
                    title="Hipnotic"
                    price={521}
                    description="O mais sensual da linha feminina" />
                </div>
            </section>
        </main>
    )
}