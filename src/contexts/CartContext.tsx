import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface iModalProps {
  handleModal: () => void;
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products: iProducts[];
  cartProducts: iCartProducts[];
  addCart: (element: iCartProducts) => void;
  removeProductCart(id: iCartProducts): void;
  removeAllProductCart() : void;
}

interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface iCartProducts {
  id: number;
  name: string;
  img: string;
}

export const CartContext = createContext({} as iModalProps);

interface iModalProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: iModalProviderProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([] as iProducts[]);
  const [cartProducts, setCartProducts] = useState([] as iProducts[]);

  useEffect(() => {
    async function getProducts() {
      const tokenValidate = localStorage.getItem("@TOKEN");
      if (tokenValidate) {
        try {
          api.defaults.headers.authorization = `Bearer ${tokenValidate}`;
          const { data } = await api.get("/products");
          setProducts(data);
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
    }
    getProducts();
  }, []);

  const handleModal = () => {
    if (modalIsOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  function addCart(element: iCartProducts) {
    const getAddProducts = products.find((elem) => elem.id === element.id);
    const noRepeatAddProducts = cartProducts.some(
      (elem) => elem.id === getAddProducts?.id
    );
    if (!noRepeatAddProducts) {
      setCartProducts((previuosCart: iProducts[] | any) => {
        return [...previuosCart, getAddProducts];
      });
      toast.success("Produto adicionado com sucesso!");
    } else {
      toast.error("Este produto já foi adicionado!");
    }
  }

  function removeProductCart(id: iCartProducts) {
    const removeAddProdcts = cartProducts.filter((elem) => elem !== id);
    setCartProducts(removeAddProdcts);
    toast.info("Produto removido com sucesso!");
  }

  function removeAllProductCart() {
    setCartProducts([]);
    toast.info("Produtos removidos com sucesso!");
  }

  return (
    <CartContext.Provider
      value={{
        modalIsOpen,
        handleModal,
        setIsOpen,
        products,
        addCart,
        cartProducts,
        removeProductCart,
        removeAllProductCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
