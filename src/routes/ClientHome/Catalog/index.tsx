import "./styles.css";
import SeachBar from "../../../componente/SearchBar";
import CatalogCard from "../../../componente/CatalogCard";
import ButtonNextPage from "../../../componente/ButtonNextPage";
import { ProductDTO } from "../../../models/product";
import * as productService from '../../../services/product-service'
import { useEffect, useState } from "react";
export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    productService.findAll()
    .then(response => {
      setProducts(response.data.content);
    })
  }, [])

  return (
      <main>
        <section id="catalog-section" className="dsc-container">
            <SeachBar></SeachBar>
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

            {
              products.map(product => <CatalogCard key={product.id} product={product}></CatalogCard>
              )
            }
          </div>
          <ButtonNextPage text="Carregar Mais"></ButtonNextPage>
        </section>
      </main>
  );
}