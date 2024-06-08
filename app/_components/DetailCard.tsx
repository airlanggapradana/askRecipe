import { Recipe } from "@/types/recipeTypes";
import { ChefHat, Utensils } from "lucide-react";
import React from "react";

const style = {
  tag: "px-5 py-2 rounded bg-gray-500 text-gray-50 rounded",
  text: "font-medium text-sm ",
};

const DetailCard = ({ detail }: { detail: Recipe }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="h-full">
          <img
            src={detail.image}
            alt=""
            className="aspect-square object-center rounded-md shadow-sm"
          />
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-2xl dark:text-teal-300">
            {detail.name}
          </h1>
          <div className="flex items-center gap-5">
            {detail.tags.slice(0, 3).map((item, i) => (
              <ul key={i} className={style.tag}>
                <li className={style.text}>{item}</li>
              </ul>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="space-y-2">
              <h1 className="font-semibold text-xl flex items-center gap-2 dark:text-teal-300">
                <span>
                  <Utensils size={24} opacity={0.75} />
                </span>
                Ingredients
              </h1>
              {detail.ingredients.map((item, index) => (
                <li className="dark:text-gray-50" key={index}>
                  {item}
                </li>
              ))}
            </div>

            <div className="space-y-2">
              <h1 className="font-semibold text-xl flex items-center gap-2 dark:text-teal-300">
                <span>
                  <ChefHat size={24} opacity={0.75} />
                </span>
                Instructions
              </h1>
              {detail.instructions.map((item, index) => (
                <li className="dark:text-gray-50" key={index}>
                  {item}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
