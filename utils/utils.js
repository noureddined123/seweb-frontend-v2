import { products } from "./data";

export const getProduct = (id) => {
  return products.find((product) => product.id === +id);
};
