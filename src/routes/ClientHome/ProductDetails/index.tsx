import ButtonPrimary from "../../../componente/ButtonInverse";
import ButtonInverse from "../../../componente/ButtonPrimary";
import ProductDetailsCard from "../../../componente/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";
import "./styles.css";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Está TV é muito bonita",
  imgUrl:
    "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos",
    },
    {
      id: 3,
      name: "Computadores",
    },
    {
      id: 4,
      name: "Importados",
    },
  ],
};

export default function ProductDetails() {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard product={product}></ProductDetailsCard>
        <div className="dsc-btn-page-container">
          <ButtonInverse text="Comprar"></ButtonInverse>
          <ButtonPrimary text="Início"></ButtonPrimary>
        </div>
      </section>
    </main>
  );
}
