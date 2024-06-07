import React from "react";
import AsianFood from "./(food)/AsianFood";
import ItalianFood from "./(food)/ItalianFood";
import AllFood from "./(food)/AllFood";
import SearchFood from "./SearchFood";

const FoodWrapper = () => {
  return (
    <>
      <SearchFood />
      <div className="space-y-7 mt-4">
        <AsianFood />
        <ItalianFood />
        <AllFood />
      </div>
    </>
  );
};

export default FoodWrapper;
