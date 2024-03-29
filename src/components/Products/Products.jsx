import React from "react";
import Grid from "@material-ui/core/Grid";
import { Product } from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Lelé día de muertos",
    price: "$5",
    image:
      "https://coinkoink.mx/assets/img/portfolio/festividades/lele-muerta.jpg",
  },
  {
    id: 2,
    name: "Bulbasaur",
    price: "$10",
    image: "https://coinkoink.mx/assets/img/portfolio/anime/bulbasaur.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export { Products };
