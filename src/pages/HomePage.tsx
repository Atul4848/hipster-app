import React, { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";

const HomePage: React.FC = () => {
  const themeClasses = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
        const uniqueCategories = [
          "all",
          ...Array.from(new Set(data.map((product) => product.category))),
        ];
        setCategories(uniqueCategories);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" || product.category === selectedCategory
  );

  return (
    <div
      className={`p-6 rounded-lg ${themeClasses.contentBg} ${themeClasses.shadow} ${themeClasses.transition} w-full`}
    >
      <h2 className={`text-3xl font-bold mb-4 ${themeClasses.textColor}`}>
        Welcome to the Home Page!
      </h2>
      <p className={`mb-6 ${themeClasses.textColor} opacity-90`}>
        This is a sample paragraph for the home page. It demonstrates how the
        content adapts to different themes. Below, you'll find a list of
        products fetched from an external API.
      </p>
      <button
        className={`px-6 py-3 rounded-full ${themeClasses.buttonBg} ${themeClasses.buttonText} ${themeClasses.fontFamily} ${themeClasses.transition} ${themeClasses.shadow}`}
      >
        Learn More
      </button>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 mb-4">
        <h3
          className={`text-2xl font-bold ${themeClasses.textColor} mb-2 sm:mb-0`}
        >
          Our Products
        </h3>
        <div className="flex items-center">
          <label
            htmlFor="category-filter"
            className={`mr-2 ${themeClasses.textColor}`}
          >
            Filter by Category:
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className={`p-2 rounded-md ${themeClasses.contentBg} ${themeClasses.textColor} ${themeClasses.fontFamily} ${themeClasses.transition}`}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading && (
        <p className={`${themeClasses.textColor}`}>Loading products...</p>
      )}
      {error && <p className={`text-red-500`}>Error: {error}</p>}
      {!loading && !error && (
        <div
          className={`${themeClasses.layout} flex flex-wrap gap-4 justify-center`}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDescriptionClick={openModal}
            />
          ))}
        </div>
      )}

      {selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProduct.title}
          description={selectedProduct.description}
        />
      )}
    </div>
  );
};

export default HomePage;
