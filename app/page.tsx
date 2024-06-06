import Image from "next/image";
import FoodWrapper from "./_components/FoodWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-center pt-24">
      <section className="container px-4 sm:px-6 lg:px-8">
        <FoodWrapper />
      </section>
    </main>
  );
}
