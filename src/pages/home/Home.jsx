import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/productApi";
import Hero from "../../components/hero/Hero";
function Home() {
  const [count, setCount] = useState(8);
  let { data, isLoading } = useGetProductsQuery(count);
  return (
    <div>
      <Banner />
      <Product
        data={data}
        loading={isLoading}
        count={count}
        setCount={setCount}
      />
      <Hero />
    </div>
  );
}

export default Home;
