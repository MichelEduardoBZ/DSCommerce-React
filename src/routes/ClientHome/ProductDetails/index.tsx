import { useNavigate, useParams } from "react-router-dom";
import ButtonPrimary from "../../../componente/ButtonInverse";
import ButtonInverse from "../../../componente/ButtonPrimary";
import ProductDetailsCard from "../../../componente/ProductDetailsCard";
import "./styles.css";
import { Link } from "react-router-dom";
import { ProductDTO } from "../../../models/product";
import { useEffect, useState } from "react";
import * as productService from "../../../services/product-service";
import * as cartService from "../../../services/cart-service";

export default function ProductDetails() {
  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  function handleByClick() {
    if (product) {
      cartService.addProduct(product);
      navigate('/cart');
    }
  }

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product}></ProductDetailsCard>}
        <div className="dsc-btn-page-container">
          <div onClick={handleByClick}>
            <ButtonInverse text="Comprar"></ButtonInverse>
          </div>
          <Link to={"/"}>
            <ButtonPrimary text="Início"></ButtonPrimary>
          </Link>
        </div>
      </section>
    </main>
  );
}
