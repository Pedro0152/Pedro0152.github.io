import { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import productsData from '../data/products.json';

const STORAGE_KEY = 'bakery_products';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : productsData.products;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const convertToWebP = async (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0);
          const webpDataUrl = canvas.toDataURL('image/webp', 0.8);
          resolve(webpDataUrl);
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  const addProduct = async (product: Product, imageFile?: File) => {
    let imageUrl = product.image;
    if (imageFile) {
      imageUrl = await convertToWebP(imageFile);
    }
    setProducts([...products, { ...product, image: imageUrl }]);
  };

  const updateProduct = async (product: Product, imageFile?: File) => {
    let imageUrl = product.image;
    if (imageFile) {
      imageUrl = await convertToWebP(imageFile);
    }
    setProducts(products.map((p) => (p.id === product.id ? { ...product, image: imageUrl } : p)));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};