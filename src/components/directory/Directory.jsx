import './directory.scss';
import categories from '../../data/categories.json';
import CategoryItem from '../category-item/CategoryItem';

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} title={category.title} imageUrl={category.imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
