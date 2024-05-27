import React from "react";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/productApi";
import Hero from "../../components/hero/Hero";
function Home() {
  let { data, isLoading } = useGetProductsQuery();
  return (
    <div>
      <Banner />
      <Product data={data} loading={isLoading} />
      <Hero />
    </div>
  );
}

export default Home;
