import { Box, useMediaQuery } from "@mui/material";
import React, { FunctionComponent } from "react";
import Header from "../../components/Header";
import Product from "../../models/product";
import { useGetProductsQuery } from "../../store/services/api";
import ProductCard from "./ProductCard";

const Products: FunctionComponent = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />

      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
        >
          {data && data.map(({ _id, name, description, price, rating, category, supply, stat }) => (
            <ProductCard 
              key={_id}
              _id={_id}
              name={name}
              description={description}
              price={price}
              rating={rating}
              category={category}
              supply={supply}
              stat={stat}
            />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;
