import React, { useState, useRef } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types/Product';

export const AdminPage: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const imageFile = fileInputRef.current?.files?.[0];
    
    const product = {
      id: editingProduct?.id || crypto.randomUUID(),
      name: formData.get('name') as string,
      price: Number(formData.get('price')),
      description: formData.get('description') as string,
      image: editingProduct?.image || '',
      inStock: Boolean(formData.get('inStock')),
    };

    if (editingProduct) {
      await updateProduct(product, imageFile);
    } else {
      await addProduct(product, imageFile);
    }
    setEditingProduct(null);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={editingProduct?.name}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="number"
                name="price"
                step="0.01"
                defaultValue={editingProduct?.price}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={editingProduct?.description}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image
              </label>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="w-full p-2 border rounded"
              />
              {editingProduct?.image && (
                <img
                  src={editingProduct.image}
                  alt="Preview"
                  className="mt-2 h-32 object-cover rounded"
                />
              )}
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="inStock"
                  defaultChecked={editingProduct?.inStock}
                />
                <span className="text-sm font-medium text-gray-700">In Stock</span>
              </label>
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            {editingProduct && (
              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              {editingProduct ? 'Update' : 'Add'} Product
            </button>
          </div>
        </form>

        <div className="bg-white rounded-lg shadow-md">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">In Stock</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    {product.inStock ? 'Yes' : 'No'}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="text-blue-600 hover:text-blue-700 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};