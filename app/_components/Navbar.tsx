import ThemeToggle from "@/components/ThemeToggle";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const mobileMenu = [
  {
    href: "https://github.com/airlanggapradana",
    logo: <Github size={24} opacity={0.75} />,
  },
  {
    href: "https://www.instagram.com/iamrangga._/",
    logo: <Instagram size={24} opacity={0.75} />,
  },
  {
    href: "https://www.linkedin.com/in/airlanggapradana/",
    logo: <Linkedin size={24} opacity={0.75} />,
  },
];

const style = {
  menu: "text-custom-text transition hover:text-primary-color dark:text-primary-color dark:hover:text-teal-500",
};

const Navbar = () => {
  return (
    <>
      <header className="w-full fixed top-0 border-b-2 shadow bg-gray-100 dark:bg-gray-900 z-50 dark:border-teal-300">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a
                className="block font-bold text-xl md:text-2xl dark:text-teal-400"
                href="#"
              >
                askRecipes
              </a>
            </div>

            <div className="hidden sm:block">
              <ul className="flex items-center gap-6 font-semibold text-base">
                {mobileMenu.map((item, index) => (
                  <Link key={index} href={item.href} className={style.menu}>
                    {item.logo}
                  </Link>
                ))}
              </ul>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
