import { useParams } from "react-router-dom";
import ButtonPrimary from "../../../componente/ButtonInverse";
import ButtonInverse from "../../../componente/ButtonPrimary";
import ProductDetailsCard from "../../../componente/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import "./styles.css";
import { Link } from "react-router-dom";

export default function ProductDetails() {

  const params = useParams(); 

  const product = productService.findById(Number(params.productId));

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {
          product &&
          <ProductDetailsCard product={product}></ProductDetailsCard>
        }
        <div className="dsc-btn-page-container">
          <ButtonInverse text="Comprar"></ButtonInverse>
          <Link to={'/'}>
          <ButtonPrimary text="Início"></ButtonPrimary>
          </Link>
        </div>
      </section>
    </main>
  );
}
