import "./styles.css";
import SeachBar from "../../../componente/SearchBar";
import CatalogCard from "../../../componente/CatalogCard";
import ButtonNextPage from "../../../componente/ButtonNextPage";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";

type QueryParams = {
  page: number;
  name: string;
};

export default function Catalog() {
  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
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
        {
          !isLastPage &&
          <div onClick={handleNextPageClick}>
            <ButtonNextPage text="Carregar Mais"></ButtonNextPage>
          </div>
        }
      </section>
    </main>
  );
}
