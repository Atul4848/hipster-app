import React from 'react';
import { useTheme } from '../hooks/useTheme';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description }) => {
  const themeClasses = useTheme();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className={`relative p-6 rounded-lg shadow-xl max-w-lg w-full m-4 ${themeClasses.contentBg} ${themeClasses.textColor} ${themeClasses.fontFamily} ${themeClasses.transition}`}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold leading-none hover:text-gray-500 focus:outline-none"
        >
          &times;
        </button>
        <h3 className={`text-2xl font-bold mb-4 ${themeClasses.textColor}`}>{title}</h3>
        <p className={`text-sm ${themeClasses.textColor} opacity-90`}>{description}</p>
      </div>
    </div>
  );
};

export default Modal;