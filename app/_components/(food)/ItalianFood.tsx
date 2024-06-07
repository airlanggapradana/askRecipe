"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Recipe } from "@/types/recipeTypes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomCard from "../CustomCard";
import DetailCard from "../DetailCard";

const ItalianFood = () => {
  const {
    data: res,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["italianFood"],
    queryFn: async () => {
      const getItalianFood = await axios.get(
        "https://dummyjson.com/recipes/tag/Italian"
      );

      return getItalianFood;
    },
  });
  const foodLists: Recipe[] = res?.data?.recipes;
  return (
    <>
      <h1 className="text-2xl font-bold dark:text-teal-400">Italian Food</h1>

      {isLoading ? (
        <div className="custom-loader"></div>
      ) : (
        <Carousel>
          <CarouselContent className="p-2">
            {foodLists?.map((food: Recipe) => (
              <CarouselItem
                key={food.id}
                className="basis-[70%] lg:basis-[20%]"
              >
                <Dialog>
                  <DialogTrigger className="h-full">
                    <CustomCard key={food.id} food={food} />
                  </DialogTrigger>

                  <DialogContent className="max-w-screen-2xl max-h-[90%] overflow-auto">
                    <DetailCard detail={food} />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </>
  );
};

export default ItalianFood;
