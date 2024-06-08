"use client";
import React from "react";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Recipe } from "@/types/recipeTypes";
import { useDebounce } from "use-debounce";
import CustomCard from "./CustomCard";
import DetailCard from "./DetailCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SearchFood = () => {
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Recipe[]>([]);

  const [debouncedSearch] = useDebounce(search, 3000);

  const getUserSearch = async (search: string) => {
    setIsLoading(true);
    const response = await axios.get(
      `https://dummyjson.com/recipes/search?q=${search}`
    );

    setData(response.data.recipes);
    setIsLoading(false);
  };

  useEffect(() => {
    if (search.length > 3) {
      getUserSearch(search);
    } else {
      setData([]);
    }
  }, [debouncedSearch]);

  return (
    <>
      <div className="w-full md:w-1/4 flex items-center gap-2 p-2 border-2 border-gray-300 dark:border-teal-400 outline-none rounded-md bg-gray-50 dark:bg-gray-800">
        <Search size={20} opacity={0.6} className="dark:text-white" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for..."
          className="w-full border-none outline-none bg-transparent dark:text-gray-100"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {data.length > 0 ? (
        <div className="space-y-3 mt-4">
          <h1 className="text-2xl font-bold dark:text-teal-400">
            Search Result for {search}
          </h1>

          {isLoading ? (
            <div className="custom-loader"></div>
          ) : (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">
              {data.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger className="h-full">
                    <CustomCard key={item.id} food={item} />
                  </DialogTrigger>

                  <DialogContent className="max-w-screen-2xl max-h-[90%] overflow-auto">
                    <DetailCard key={item.id} detail={item} />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default SearchFood;
