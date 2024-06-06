import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Recipe } from "@/types/recipeTypes";

const CustomCard = ({ food }: { food: Recipe }) => {
  return (
    <Card className="h-full bg-gray-100 overflow-hidden shadow-md">
      <CardHeader className="space-y-4">
        <img
          src={food.image}
          alt=""
          className="aspect-square object-center rounded-md"
        />
        <CardTitle className="text-xl">{food.name}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CustomCard;
