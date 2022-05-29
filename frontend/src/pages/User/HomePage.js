import React from "react";
import Header from "../../components/Header";
import CarouselComponent from "../../components/CarouselComponent";
import CategoryCard from "../../components/CategoryCard";
import CardContainer from "../../components/CardContainer";

const HomePage = () => {
  return (
    <div className="mx-auto md:container">
      <div class="py-3">
        <CarouselComponent />
      </div>
      <div>
        <div>
          <h1 class="font-bold text-xl mt-3">Choose from these categories</h1>
        </div>
        <div class="py-3">
          <CategoryCard />
        </div>
      </div>
      <div class="my-3">
        <CardContainer />
      </div>
    </div>
  );
};

export default HomePage;
