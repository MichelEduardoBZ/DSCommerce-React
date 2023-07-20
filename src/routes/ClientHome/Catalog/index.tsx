import "./styles.css";
import SeachBar from "../../../componente/SearchBar";
import CatalogCard from "../../../componente/CatalogCard";
import ButtonNextPage from "../../../componente/ButtonNextPage";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Está TV é muito bonita",
  imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos"
    },
    {
      id: 3,
      name: "Computadores"
    },
    {
      id: 4,
      name: "Importados"
    }
  ]
}

export default function Catalog() {
  return (
      <main>
        <section id="catalog-section" className="dsc-container">
            <SeachBar></SeachBar>
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
          </div>
          <ButtonNextPage text="Carregar Mais"></ButtonNextPage>
        </section>
      </main>
  );
}
