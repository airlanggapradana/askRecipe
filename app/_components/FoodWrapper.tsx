import React from "react";
import AsianFood from "./(food)/AsianFood";
import ItalianFood from "./(food)/ItalianFood";
import AllFood from "./(food)/AllFood";

const FoodWrapper = () => {
  return (
    <div className="space-y-7">
      <AsianFood />
      <ItalianFood />
      <AllFood />
    </div>
  );
};

export default FoodWrapper;
