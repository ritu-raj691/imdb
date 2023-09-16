"use client";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import {useRouter} from "next/navigation";

function SearchBox(props: any) {
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): T => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return ((...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    }) as T;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    setInput(searchText);

    // Debounce the update of debouncedValue
    const debouncedUpdate = debounce(() => {
      console.log("searchText", searchText);
      if(!searchText) router.push(`/`);
      else router.push(`/search/${searchText}`);

    }, 300); // Adjust the delay time (in milliseconds) as needed

    debouncedUpdate();
  };

  return (
    <form className="w-full">
      {props?.isSearchBarEnabledForMobile ? (
        <div className="flex items-center justify-evenly">
          <input
            type="text"
            placeholder="Search IMDb"
            className="bg-white h-8 rounded pl-2 text-black w-80"
            value={input}
            onChange={handleInputChange}
          />
          <AiOutlineClose
            className="text-white text-2xl"
            onClick={() => props.onSearchIconClick(false)}
          />
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Search IMDb"
            className="bg-white h-8 hidden sm:flex rounded pl-2 text-black w-80"
            value={input}
            onChange={handleInputChange}
          />
          <BsSearch
            className="sm:hidden"
            onClick={() => props.onSearchIconClick(true)}
          />
        </>
      )}
    </form>
  );
}

export default SearchBox;
