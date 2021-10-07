import Button from "../Button";

import { useContext } from "react";

import { CatalogueContext } from "../../Providers/catalogue";
import { CartContext } from "../../Providers/cart";
import { Container, List } from "./styles";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <h3>{type}</h3>
      <List>
        {type === "catalogue" &&
          catalogue.map((product, index) => (
            <li key={index}>
              {product.name} <Button type={type} item={product} />
            </li>
          ))}

        {type === "cart" &&
          cart.map((product, index) => (
            <li key={index}>
              {" "}
              {product.name} <Button type={type} item={product} />
            </li>
          ))}
      </List>
    </Container>
  );
};

export default ProductList;
