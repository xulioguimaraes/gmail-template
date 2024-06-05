import { ProductListProps } from "@/@types/cart";
import { ReactNode, createContext, useContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface ICartContext {
  addProductCart: (product: ProductListProps) => void;
  dataCart: ProductListProps[];
}

const CartContext = createContext({} as ICartContext);

const CartProvider = ({ children }: CartProviderProps) => {
  const [dataCart, setDataCart] = useState<ProductListProps[]>([]);

  const addProductCart = (produt: ProductListProps) =>
    setDataCart((old) => [...old, produt]);
  return (
    <CartContext.Provider value={{ addProductCart, dataCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
