import { ProductListProps } from "@/@types/cart";
import { productList } from "@/mock";
import { useRouter } from "expo-router";
import { ReactNode, createContext, useContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface ICartContext {
  addProductCart: (product: ProductListProps) => void;
  dataCart: ProductListProps[];
  addProductCartQuantity: (idProduct: number, quantity: number) => void;
  removeProductCart: (id: number) => void;
}

const CartContext = createContext({} as ICartContext);

const CartProvider = ({ children }: CartProviderProps) => {
  const [dataCart, setDataCart] = useState<ProductListProps[]>([]);
  const router = useRouter();
  const addProductCart = (produt: ProductListProps) =>
    setDataCart((old) => [...old, produt]);

  const addProductCartQuantity = (idProduct: number, quantity: number) => {
    const product = productList.find((item) => item.id === idProduct);
    if (product) {
      for (let index = 0; index < quantity; index++) {
        setDataCart((old) => [...old, product]);
      }
      router.push("/cart");
    }
  };

  const removeProductCart = (id: number) => {
    setDataCart((old) => old.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider
      value={{
        addProductCart,
        dataCart,
        addProductCartQuantity,
        removeProductCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
