import CategoryPreview from '../../components/categoryPreview/CategoryPreview';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreview;
