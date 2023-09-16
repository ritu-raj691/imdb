import Link from "next/link";
import { Menuitem } from "../models/Common";

const MenuItem = (props: Menuitem) => {
  const { title, href, Icon } = props;

  return (
    <div>
      <Link href={href} className="text-xl hover:text-amber-400 ">
        <Icon className="text-3xl sm:hidden ml-4" />
        <p className="hidden sm:inline ml-4 text-base">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
