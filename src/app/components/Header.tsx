"use client";
import MenuItem from "./MenuItem";
import { Menuitems } from "../utilities/Constant";
import Link from "../../../node_modules/next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchBox from "./SearchBox";
import { useState } from "react";

const Header = () => {
  const [isSearchBarEnabledForMobile, setIsSearchBarEnabledForMobile] =
    useState<boolean>(false);

  const onSearchIconClick = (action: boolean): void => {
    setIsSearchBarEnabledForMobile(action);
  };

  return (
    <>
      {isSearchBarEnabledForMobile ? (
        <div className="h-12 bg-gray-600 text-white flex items-center pt-2 pb-2 w-full dark:bg-gray-900">
          <div className="flex items-center mx-auto w-full">
            <SearchBox
              isSearchBarEnabledForMobile={isSearchBarEnabledForMobile}
              onSearchIconClick={onSearchIconClick}
            />
          </div>
        </div>
      ) : (
        <div className="h-12 bg-gray-600 text-white flex items-center pt-2 pb-2 w-full dark:bg-gray-900">
          <div className="flex items-center mx-auto space-x-5 justify-center">
            {Menuitems.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <MenuItem
                    title={item.title}
                    href={item.href}
                    Icon={item.Icon}
                  />
                </div>
              );
            })}
            <SearchBox
              isSearchBarEnabledForMobile={isSearchBarEnabledForMobile}
              onSearchIconClick={onSearchIconClick}
            />
            <DarkModeSwitch />
            <Link href="/">
              <h1 className="font-bold bg-amber-500 py-1 px-2 rounded-sm hover:bg-amber-50 hover:text-black">
                IMDb
              </h1>
            </Link>
          </div>
          {/* <div className="flex items-center space-x-5 mx-auto"></div> */}
        </div>
      )}
    </>
  );
};

export default Header;
