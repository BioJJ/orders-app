"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./Inputs/Input";
import { cn } from "@/utils/cn";

type SearchProps = {
  hasAdvancedFilter?: boolean;
  defaultValue?: string;
  searchParam: string;
  secondSearchParam?: string;
  maxLength?: number;
  minSearchCharacters?: number;
  cursorSearch?: boolean;
  children?: React.ReactNode;
  className?: string;
  fullSize?: boolean;
  isClearable?: boolean;
};

export function NewSearch({
  hasAdvancedFilter = false,
  searchParam,
  secondSearchParam = "",
  defaultValue,
  maxLength,
  minSearchCharacters = 3,
  children,
  className,
  cursorSearch,
  isClearable = false,
  fullSize = false
}: Readonly<SearchProps>) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  const initialSearchValue = searchParams.get(searchParam) || defaultValue;
  const [value, setValue] = useState(initialSearchValue);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (!cursorSearch) {
      params.set("page", "1");
    }

    if (term.length === 0) {
      params.delete(searchParam);
      if (secondSearchParam) {
        params.delete(secondSearchParam);
      }
    } else {
      if (isNaN(Number(term)) || !secondSearchParam) {
        params.set(searchParam, term);
        params.delete(secondSearchParam);
      } else {
        params.set(secondSearchParam, term);
        params.delete(searchParam);
      }
    }

    push(`${pathname}?${params.toString()}`);
  }, 500);

  const handleChangeValue = (value: string) => {
    setValue(value);
    if (value.length >= minSearchCharacters || value.length === 0) {
      handleSearch(value);
    }
  };

  return (
    <>
      {!hasAdvancedFilter && (
        <div className={cn("w-72", className)}>
          <Input
            value={value}
            onChange={(e: { target: { value: string } }) =>
              handleChangeValue(e.target.value)
            }
            isSearch
            hasFilter={hasAdvancedFilter}
            maxLength={maxLength}
            variant="newSearch"
            containerSize="md"
            placeholder="Digite"
          />
        </div>
      )}
    </>
  );
}
