import "./styles.css";
import SeachBar from "../../../componente/SearchBar";
import CatalogCard from "../../../componente/CatalogCard";
import ButtonNextPage from "../../../componente/ButtonNextPage";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [productName, setProductName] = useState("");

  useEffect(() => {

    productService.findPageRequest(0, productName)
    .then((response) => {
      setProducts(response.data.content);
    });
  }, [productName]);

  function handleSearch(searchText: string){
    setProductName(searchText)
  }

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SeachBar onSearch={handleSearch}></SeachBar>
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product}></CatalogCard>
          ))}
        </div>
        <ButtonNextPage text="Carregar Mais"></ButtonNextPage>
      </section>
    </main>
  );
}
