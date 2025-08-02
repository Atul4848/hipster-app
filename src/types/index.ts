export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ThemeClasses {
  bodyBg: string;
  textColor: string;
  fontFamily: string;
  headerBg: string;
  headerText: string;
  layout: string;
  contentBg: string;
  buttonBg: string;
  buttonText: string;
  cardBg: string;
  cardBorder: string;
  transition: string;
  shadow: string;
}

export const themes: { [key: string]: ThemeClasses } = {
  theme1: {
    bodyBg: 'bg-gray-100',
    textColor: 'text-gray-800',
    fontFamily: 'font-sans',
    headerBg: 'bg-white',
    headerText: 'text-gray-900',
    layout: 'flex-row',
    contentBg: 'bg-white',
    buttonBg: 'bg-blue-500 hover:bg-blue-600',
    buttonText: 'text-white',
    cardBg: 'bg-white',
    cardBorder: 'border border-gray-200',
    transition: 'transition-all duration-500 ease-in-out',
    shadow: 'shadow-md',
  },
  theme2: {
    bodyBg: 'bg-gray-900',
    textColor: 'text-gray-100',
    fontFamily: 'font-serif',
    headerBg: 'bg-gray-800',
    headerText: 'text-white',
    layout: 'flex-col md:flex-row',
    contentBg: 'bg-gray-800',
    buttonBg: 'bg-purple-600 hover:bg-purple-700',
    buttonText: 'text-white',
    cardBg: 'bg-gray-700',
    cardBorder: 'border border-gray-600',
    transition: 'transition-all duration-500 ease-in-out',
    shadow: 'shadow-lg',
  },
  theme3: {
    bodyBg: 'bg-gradient-to-br from-pink-300 to-yellow-300',
    textColor: 'text-gray-900',
    fontFamily: 'font-pacifico',
    headerBg: 'bg-gradient-to-r from-purple-500 to-pink-500',
    headerText: 'text-white',
    layout: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    contentBg: 'bg-white bg-opacity-80',
    buttonBg: 'bg-green-500 hover:bg-green-600',
    buttonText: 'text-white',
    cardBg: 'bg-white',
    cardBorder: 'border border-green-400',
    transition: 'transition-all duration-500 ease-in-out',
    shadow: 'shadow-xl',
  },
};