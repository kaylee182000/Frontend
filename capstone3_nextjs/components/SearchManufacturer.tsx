"use client";

import React from "react";

import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";

import { SearchManufacturesProps } from "@/types";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturesProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car-logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer) => manufacturer}
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
