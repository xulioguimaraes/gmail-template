import { ProductListProps } from "@/@types/cart";
import { productList } from "@/mock";
import { ReactNode, createContext, useContext, useState } from "react";

interface ProductAppProviderProps {
  children: ReactNode;
}

interface IProductAppContext {
  dataProductApp: ProductListProps[];
}

const ProductAppContext = createContext({} as IProductAppContext);

const ProductAppProvider = ({ children }: ProductAppProviderProps) => {
  const [dataProductApp, setDataProductApp] =
    useState<ProductListProps[]>(productList);

  return (
    <ProductAppContext.Provider value={{ dataProductApp }}>
      {children}
    </ProductAppContext.Provider>
  );
};

const useProductApp = () => useContext(ProductAppContext);

export { ProductAppProvider, useProductApp };
