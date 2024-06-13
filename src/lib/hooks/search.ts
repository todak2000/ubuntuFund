import { useEffect, useState, useRef } from "react";
import { Product, ProductCardProps } from "../components/constants/types";
import { useSearchAlgolia } from "./query/products";
import { transformProducts } from "../helpers/transformers";

import { debounce } from "lodash";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<ProductCardProps[]>([]);

  const { isLoading: searchLoading, data: searchData } = useSearchAlgolia(
    isSearching ? searchTerm : null
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSearching(true);
  };

  useEffect(() => {
    if (!searchLoading && searchData) {
      const transformedProducts: ProductCardProps[] = searchData
        ? transformProducts(searchData?.data as Product[])
        : [];
      setSearchResult(transformedProducts);
    }
  }, [searchLoading, searchData]);

  const node = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (node.current?.contains(e.target as Node)) {
        return;
      }
      setSearchTerm("");
      setShowDropdown(false);
      setIsSearching(false);
      setSearchResult([]);
    };

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Remove the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setIsSearching(false);
    }
    setSearchTerm(e.target.value);
  };

  const handleKeyUp = debounce(() => {
    if (searchTerm !== "" && searchTerm.length > 2) {
      setIsSearching(true);
    }
  }, 1500);

  const handleClick = () => {
    if (searchTerm !== "") {
      setIsSearching(false);
    } else {
      setShowDropdown(true);
    }
  };

  return {
    node,
    showDropdown,
    isSearching,
    searchTerm,
    handleKeyUp,
    setSearchTerm,
    handleSearch,
    handleChange,
    handleClick,
    searchLoading,
    searchResult,
  };
};

export default useSearch;
