"use client";
import React, { useCallback, useEffect, useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button className={`-ml-3 z-10 ${otherClasses}`} type="submit">
      <Image
        src="/magnifying-glass.svg"
        alt="search"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  /*
    Using the solution in issue 49087 because if not it will always scroll to top
  */
  useEffect(() => {
    // Retrieve scrollY value from localStorage after routing
    const persistentScroll = localStorage.getItem("persistentScroll");
    if (persistentScroll === null) return;

    // Restore the window's scroll position
    window.scrollTo({ top: Number(persistentScroll) });

    // Remove scrollY from localStorage after restoring the scroll position
    // This hook will run before and after routing happens so this check is
    // here to make we don't delete scrollY before routing
    if (Number(persistentScroll) === window.scrollY)
      localStorage.removeItem("persistentScroll");
  }, [searchParams]);

  const updateSearchParams = useCallback(
    (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);
      if (model) {
        searchParams.set("model", model);
      } else {
        searchParams.delete("model");
      }

      if (manufacturer) {
        searchParams.set("manufacturer", manufacturer);
      } else {
        searchParams.delete("manufacturer");
      }

      const newPathName = `${
        window.location.pathname
      }?${searchParams.toString()}`;

      localStorage.setItem("persistentScroll", window.scrollY.toString());

      router.push(newPathName);
    },
    [searchParams, router]
  );

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          className="absolute w-[20px] h-[20px] ml-4"
          width={25}
          height={25}
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <SearchButton otherClasses={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
