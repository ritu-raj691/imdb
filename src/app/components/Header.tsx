import MenuItem from "./MenuItem";
import { Menuitems } from "../utilities/Constant";
import Link from "../../../node_modules/next/link";

const Header = () => {
  return (
    <div className="h-12 bg-black text-white flex items-center pt-2 pb-2 w-full">
      <div className="flex items-center mx-auto">
        {Menuitems.map((item: any, index: number) => {
          return (
            <div key={index}>
              <MenuItem title={item.title} href={item.href} Icon={item.Icon} />
            </div>
          );
        })}
      </div>
      <Link href="/" className="mx-auto">
        <h1 className="font-bold bg-amber-500 py-1 px-2 rounded-sm hover:bg-amber-50 hover:text-black">
          IMDb
        </h1>
      </Link>
    </div>
  );
};

export default Header;
