import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const Menuitems: { title: string; href: string; Icon: any }[] = [
  {
    title: "Home",
    href: "/",
    Icon: AiFillHome,
  },
  {
    title: "About",
    href: "/about",
    Icon: BsFillInfoCircleFill,
  },
];

export const NavbarItems: { title: string; param: string }[] = [
  {
    title: "Trending",
    param: "fetchTrending",
  },
  {
    title: "Top Rated",
    param: "fetchTopRated",
  },
];
