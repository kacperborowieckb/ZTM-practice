import './directory.scss';
import categories from '../../data/categories.json';
import DirectoryItem from '../directory-item/DirectoryItem';

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
