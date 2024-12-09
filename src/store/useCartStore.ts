import { create } from 'zustand';
import { Product } from '../types/Product';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + product.price,
        };
      }
      return {
        items: [...state.items, { ...product, quantity: 1 }],
        total: state.total + product.price,
      };
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
      total: state.total - (state.items.find((item) => item.id === productId)?.price ?? 0),
    })),
  decreaseQuantity: (productId) =>
    set((state) => {
      const item = state.items.find((item) => item.id === productId);
      if (!item) return state;
      if (item.quantity === 1) {
        return {
          items: state.items.filter((item) => item.id !== productId),
          total: state.total - item.price,
        };
      }
      return {
        items: state.items.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        total: state.total - item.price,
      };
    }),
  clearCart: () => set({ items: [], total: 0 }),
}));