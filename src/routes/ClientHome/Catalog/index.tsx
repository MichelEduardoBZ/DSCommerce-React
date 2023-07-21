import "./styles.css";
import SeachBar from "../../../componente/SearchBar";
import CatalogCard from "../../../componente/CatalogCard";
import ButtonNextPage from "../../../componente/ButtonNextPage";
import * as productService from '../../../services/product-service';
export default function Catalog() {
  return (
      <main>
        <section id="catalog-section" className="dsc-container">
            <SeachBar></SeachBar>
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

            {
              productService.findAll().map(product => <CatalogCard key={product.id} product={product}></CatalogCard>
              )
            }
          </div>
          <ButtonNextPage text="Carregar Mais"></ButtonNextPage>
        </section>
      </main>
  );
}
