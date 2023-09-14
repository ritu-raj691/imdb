"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { INavbarItem } from "../models/Common";

const NavbarItem = (props: INavbarItem) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      className={`ml-4 text-base text-white cursor-pointer hover:text-amber-500 ${
        genre?.toLowerCase() === props?.param?.toLowerCase() &&
        "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
      }`}
      href={`/?genre=${props.param}`}
    >
      {props?.title}
    </Link>
  );
};

export default NavbarItem;
