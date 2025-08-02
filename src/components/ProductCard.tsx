import React from 'react';
import { Product } from '../types';
import { useTheme } from '../hooks/useTheme';

interface ProductCardProps {
  product: Product;
    onDescriptionClick: (product: Product) => void;

}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDescriptionClick }) => {
  const themeClasses = useTheme();

  return (
    <div className={`p-4 rounded-lg flex-shrink-0 ${themeClasses.cardBg} ${themeClasses.cardBorder} ${themeClasses.shadow} ${themeClasses.transition} flex flex-col justify-between items-center text-center w-64 min-h-[28rem]`}>
      <div className="flex-grow flex flex-col items-center">
        <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4 rounded-md" onError={(e: any) => e.target.src = `https://placehold.co/128x128/cccccc/333333?text=No+Image`} />
        <h3 className={`text-lg font-semibold ${themeClasses.textColor} mb-2`}>{product.title}</h3>
        <p className={`text-xl font-bold ${themeClasses.textColor} mb-2`}>${product.price.toFixed(2)}</p>
        <p className={`text-sm ${themeClasses.textColor} opacity-90 mb-1`}>Category: {product.category}</p>
        <div className={`flex items-center text-sm ${themeClasses.textColor} opacity-90 mb-2`}>
          <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{product.rating.rate}</span>
          <span className="ml-2">({product.rating.count} reviews)</span>
        </div>
        <div className="flex-grow overflow-hidden">
          <p className={`text-xs ${themeClasses.textColor} opacity-80 line-clamp-3`}>{product.description}</p>
        </div>
      </div>
      <button
        onClick={() => onDescriptionClick(product)}
        className={`mt-4 text-blue-500 hover:text-blue-700 font-medium ${themeClasses.transition}`}
      >
        Read more
      </button>
    </div>
  );
};

export default ProductCard;