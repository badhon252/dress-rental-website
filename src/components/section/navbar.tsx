"use client";

// Packages
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

// Components
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  const menus = [
    { id: 1, href: "/", linkText: "HOME" },
    { id: 2, href: "/shop", linkText: "SHOP" },
    { id: 3, href: "/about", linkText: "ABOUT" },
    { id: 4, href: "/how-it-works", linkText: "HOW IT WORKS" },
    { id: 5, href: "/become-lender", linkText: "BECOME A LENDER" },
    { id: 6, href: "/find-near-you", linkText: "FIND NEAR YOU" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <div
      className={`fixed top-0 z-50 w-full h-[70px] py-3 transition duration-300 ${
        scrolling
          ? "bg-transparent backdrop-blur-xl "
          : isHomePage
          ? ""
          : "bg-transparent mt-0"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center md:gap-x-3 lg:gap-x-1">
            {menus.map((menu) => (
              <Button
                key={menu.id}
                variant="link"
                effect="hoverUnderline"
                asChild
                className={`text-[14px] font-normal ${
                  pathname === "/become-lender" ||
                  pathname === "/shop" ||
                  pathname === "/about" ||
                  pathname === "/how-it-works" ||
                  pathname === "/find-near-you" ||
                  scrolling
                    ? "text-black"
                    : "text-white"
                }`}
              >
                <Link
                  href={menu.href}
                  className={`${
                    pathname === menu.href ? "font-normal" : "font-light"
                  } leading-[20px] tracking-[0.2em]`}
                >
                  {menu.linkText}
                </Link>
              </Button>
            ))}
          </div>

          {/* Logo */}
          {scrolling ||
          pathname === "/become-lender" ||
          pathname === "/shop" ||
          pathname === "/about" ||
          pathname === "/how-it-works" ||
          pathname === "/find-near-you" ? (
            <div className="">
              <Image
                src="/logos/Logo_black.png"
                height={60}
                width={60}
                alt="Logo"
              />
            </div>
          ) : (
            <div className="">
              <Image src="/logos/logo.png" height={60} width={60} alt="Logo" />
            </div>
          )}

          {/* Desktop Login */}

          <div
            className={`${
              scrolling ||
              pathname === "/become-lender" ||
              pathname === "/shop" ||
              pathname === "/about" ||
              pathname === "/how-it-works" ||
              pathname === "/find-near-you"
                ? "text-black"
                : "text-white"
            } flex gap-[30px]`}
          >
            <Search />

            {/* Hover User to reveal Login */}
            <div className={`relative group cursor-pointer `}>
              <User />
              <div className="absolute top-5 -right-4 mt-1 hidden group-hover:block z-50">
                <Link
                  href="/login"
                  className={`block px-2 py-2 text-[16px] ${
                    scrolling ? "border-black" : "border-white"
                  } border-b  font-normal`}
                >
                  Login
                </Link>
              </div>
            </div>

            <ShoppingBag />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center justify-between gap-x-4 w-full">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-1" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="bg-white text-black">
                <div className="flex flex-col items-center gap-y-8 mt-6">
                  <div className="flex flex-col items-center gap-y-5">
                    {menus.map((menu) => (
                      <Link
                        key={menu.id}
                        href={menu.href}
                        className={`${
                          pathname === menu.href
                            ? "font-semibold"
                            : "font-light"
                        } text-lg`}
                      >
                        <SheetClose>{menu.linkText}</SheetClose>
                      </Link>
                    ))}
                    <Link href="/login" className="text-lg font-medium">
                      <SheetClose>Login</SheetClose>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <div>
              <Button
                variant="link"
                effect="hoverUnderline"
                asChild
                className="text-white"
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
