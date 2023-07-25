import { useNavigate, useParams } from "react-router-dom";
import ButtonPrimary from "../../../componente/ButtonInverse";
import ButtonInverse from "../../../componente/ButtonPrimary";
import ProductDetailsCard from "../../../componente/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import "./styles.css";
import { Link } from "react-router-dom";
import { ProductDTO } from "../../../models/product";
import { useEffect, useState } from "react";

export default function ProductDetails() {

  const params = useParams(); 

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId))
    .then(response => {
      setProduct(response.data)
    })
    .catch(() => {
      navigate("/")
    });
  }, [])

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