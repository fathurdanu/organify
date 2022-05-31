import React from "react";
import CarouselComponent from "../../components/CarouselComponent";
import ProductFilter from "../../components/ProductFilter";
import CardContainerUser from "../../components/CardContainerUser";

const HomePage = () => {
  return (
    <div className="mx-auto md:container">
      <div className="py-3">
        <CarouselComponent />
      </div>
      <div>
        <div>
          <h1 className="font-bold text-xl mt-3">Choose from these categories</h1>
        </div>
        <div className="py-3">
          <ProductFilter />
        </div>
      </div>
      <div className="my-3">
        <CardContainerUser />
      </div>
    </div>
  );
};

export default HomePage;
