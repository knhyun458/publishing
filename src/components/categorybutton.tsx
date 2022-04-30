import React from 'react';
import { Category } from '../pages/HomePage';

type CategoryButtonProps = {
  category: Category;
  onClick: (index: number) => void;
  isSelected: boolean;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  onClick,
  isSelected,
}) => {
  return (
    <div className={`${!isSelected && "opacity-50"}`} 
    onClick={() => onClick(category.id)} >
      <img
        src= {category.image}
        alt=""
        className="w-20 h-20 object-cover rounded-full"
      />
       <div className="text-center text-darkbrown font-bold">{category.label}</div> 
    </div>
  );
};
