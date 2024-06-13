import { useState, useEffect } from "react";
import { shuffleRandom } from "../helpers/shuffleRandom";
import { transformProducts } from "../helpers/transformers";
import { Product, ProductCardProps } from "../components/constants/types";
import { useGetAlgoliaProductSuggestions, useGetAlgoliaProducts } from "./query/products";

export const useProductSuggestions = () => {
  const [suggestResult, setSuggestResult] = useState<ProductCardProps[]>([]);
  const [popularResult, setPopularResult] = useState<ProductCardProps[]>([]);
  const [recentResult, setRecentResult] = useState<ProductCardProps[]>([]);

  
const {isLoading: algoliaLoading, data: algoliaProducts} = useGetAlgoliaProducts()
const allproducts = !algoliaLoading && algoliaProducts?  algoliaProducts?.data: []
  const randomIndexSuggest =
    allproducts && allproducts.length > 0
      ? Math.floor(Math.random() * allproducts.length)
      : 0;
  const randomIndexPopular =
    allproducts && allproducts.length > 0
      ? Math.floor(Math.random() * allproducts.length)
      : 0;
  const randomIndexRecent =
    allproducts && allproducts.length > 0
      ? Math.floor(Math.random() * allproducts.length)
      : 0;

  const { isLoading: suggestionLoading, data: suggestionDataSuggest } =
    useGetAlgoliaProductSuggestions(
      allproducts && allproducts.length > 0
        ? (allproducts[randomIndexSuggest].objectID as string)
        : ""
    );
  const { isLoading: popularLoading, data: suggestionDataPopular } =
    useGetAlgoliaProductSuggestions(
      allproducts && allproducts.length > 0
        ? (allproducts[randomIndexPopular].objectID as string)
        : ""
    );
  const { isLoading: recentLoading, data: suggestionDataRecent } =
    useGetAlgoliaProductSuggestions(
      allproducts && allproducts.length > 0
        ? (allproducts[randomIndexRecent].objectID as string)
        : ""
    );

  useEffect(() => {
    //suggestion
    if (!suggestionLoading) {
      const transformedSuggestionProductsSuggest: ProductCardProps[] =
        suggestionDataSuggest
          ? transformProducts(suggestionDataSuggest?.data as Product[])
          : [];

      setSuggestResult(shuffleRandom(transformedSuggestionProductsSuggest, 5));
    }
    // recent
    if (!recentLoading) {
      const transformedSuggestionProductsRecent: ProductCardProps[] =
        suggestionDataRecent
          ? transformProducts(suggestionDataRecent?.data as Product[])
          : [];
      setRecentResult(shuffleRandom(transformedSuggestionProductsRecent, 5));
    }
    //   popular
    if (!popularLoading) {
      const transformedSuggestionProductsPopular: ProductCardProps[] =
        suggestionDataPopular
          ? transformProducts(suggestionDataPopular?.data as Product[])
          : [];
      setPopularResult(shuffleRandom(transformedSuggestionProductsPopular, 5));
    }
  }, [
    suggestionLoading,
    suggestionDataSuggest,
    suggestionDataPopular,
    suggestionDataRecent,
    recentLoading,
    popularLoading,
  ]);

  return { suggestResult, popularResult, recentResult,recentLoading, popularLoading, suggestionLoading};
};
