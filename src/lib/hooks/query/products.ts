import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../../services/ProductService";
import { AlgoliaProductService } from "@/lib/services/AlgoliaProductService";
// get All products (per 100 items)
export const useGetProducts = () => {
  const productService = new ProductService();
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => productService.getProducts(),
  });
};

export const useGetPromotedProducts = () => {
  const productService = new ProductService();
  return useQuery({
    queryKey: ["promoted-products"],
    queryFn: async () => productService.getPromotedProducts(),
  });
};
// 

// get single product by slug ID
export const useGetProduct = (slug: string) => {
  const productService = new ProductService();
  return useQuery({
    queryKey: ["product"],
    queryFn: async () => productService.getProduct(slug),
    enabled: !!slug
  });
};

// search products via algolia (per 100 items)
export const useSearchAlgolia = (query: string|null) => {
  const algoliaProductService = new AlgoliaProductService();
  return useQuery({
    queryKey: ["algolia-search"],
    queryFn: async () => algoliaProductService.searchProducts(query as string),
    enabled: !!query
  });
};

// get all  products via algolia 
export const useGetAlgoliaProducts = () => {
  const algoliaProductService = new AlgoliaProductService();
  return useQuery({
    queryKey: ["products-algolia"],
    queryFn: async () => algoliaProductService.getProducts(),
  });
};

// get single product by slug ID
export const useGetAlgoliaProduct = (objectID: string) => {
  const algoliaProductService = new AlgoliaProductService();
  return useQuery({
    queryKey: ["product-algolia"],
    queryFn: async () => algoliaProductService.getProduct(objectID),
    enabled: !!objectID
  });
};

// get all  products via algolia 
export const useGetAlgoliaProductSuggestions = (objectID: string) => {
  const algoliaProductService = new AlgoliaProductService();
  return useQuery({
    queryKey: ["suggested-products-algolia"],
    queryFn: async () => algoliaProductService.getSuggestedProducts(objectID),
    enabled: !!objectID
  });
};
