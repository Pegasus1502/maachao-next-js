"use client";
import { useMediaQuery } from "react-responsive";
import {
  FiCamera,
  FiMusic,
  FiBook,
  FiCode,
  FiGlobe,
  FiShoppingBag,
  FiCoffee,
 
  FiArchive
  
} from "react-icons/fi";

export default function Category() {
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    const getPadding = () => {
        return isDesktop ? 'p-4' : 'p-1';
      };
    
      const categories = [
        { icon: <FiCamera size={isDesktop ? 80 : 24} className={`mx-2 bg-gray-100 border border-gray-500 rounded-lg ${getPadding()}`} />, name: 'Photography' },
        { icon: <FiMusic size={isDesktop ? 80 : 24} className={`mx-2 bg-gray-100 border border-gray-500 rounded-lg ${getPadding()}`} />, name: 'Music' },
        { icon: <FiBook size={isDesktop ? 80 : 24} className={`mx-2 bg-gray-100 border border-gray-500 rounded-lg ${getPadding()}`} />, name: 'Books' },
        { icon: <FiCode size={isDesktop ? 80 : 24} className={`mx-2 bg-gray-100 border border-gray-500 rounded-lg ${getPadding()}`} />, name: 'Programming' },
        { icon: <FiGlobe size={isDesktop ? 80 : 24} className={`mx-2 bg-gray-100 border border-gray-500 rounded-lg ${getPadding()}`} />, name: 'Travel' },
        { icon: <FiShoppingBag size={isDesktop ? 80 : 24} className={`mx-2 bg-gray-100 border border-gray-500 rounded-lg ${getPadding()}`} />, name: 'Shopping' },
        { icon: <FiCoffee size={isDesktop ? 80 : 24} className={`mx-2 bg-gray-100 border border-gray-500 rounded-lg ${getPadding()}`} />, name: 'Coffee' },
        { icon: <FiArchive size={isDesktop ? 80 : 24} className={`mx-2 bg-yellow-200 border border-yellow-400 rounded-lg ${getPadding()}`} />, name: 'More' },
      ];
    
    
  
  return (
    <div className="grid grid-cols-4 gap-4 p-4 m-5">
    {categories.map((category, index) => (
      <div key={index} className="flex flex-col items-center">
        {category.icon}
        <span className="mt-2 text-sm">{category.name}</span>
      </div>
    ))}
  </div>
  );
}
