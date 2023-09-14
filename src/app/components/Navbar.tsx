import { INavbarItem } from "../models/Common";
import { NavbarItems } from "../utilities/Constant";
import NavbarItem from "./NavbarItem";

const Navbar = (props: any) => {
  const NavItems: INavbarItem[] = NavbarItems;
  return (
    <div className="h-12 bg-gray-500 w-full flex items-center justify-center dark:bg-gray-800">
      {NavItems.map((item: INavbarItem, index: number) => {
        return (
          <div key={index}>
            <NavbarItem title={item.title} param={item.param} />
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
