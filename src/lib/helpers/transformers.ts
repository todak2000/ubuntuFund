import { Category, Product, ProductCardProps } from "../components/constants/types";
import { truncateString } from "./truncateString";

export const transformCategories = (categories:Category[]) =>{
    return categories.map(category => ({
      name: category.name,
      icon: category?.iconUrl && category.iconUrl !== '' ? category.iconUrl:'/assets/categories/supermarket.svg',
      redirect: `/search?categories=${category.name}`,
    }));
  }
  
export const transformProducts = (products: Product[]): ProductCardProps[]=> {
    return products.map(product => ({
      productId:product.id,
      productImage: product.imageUrl,
      productName: truncateString(product.name, 15),
      price: product.price,
      slug:product.slug ?? product.id
    }));
  }