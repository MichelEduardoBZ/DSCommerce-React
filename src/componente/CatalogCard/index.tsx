import './styles.css'
import { ProductDTO } from '../../models/product';

type Props = {
  product : ProductDTO;
}

export default function CatalogCard({product} : Props){
    return (
        <div className="dsc-card">
        <div className="dsc-catalog-card-top dsc-line-bottom">
          <img src={product.imgUrl} alt="Computer" />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h3>R$ {product.price}</h3>
          <h4>
           {product.description}
          </h4>
        </div>
      </div>
    );
}