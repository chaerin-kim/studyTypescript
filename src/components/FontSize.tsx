import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeProvider';

const FontSize = () => {
  const { setFontSize } = useContext(ThemeContext);
  
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setFontSize('small')}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        Small
      </button>
      <button
        onClick={() => setFontSize('medium')}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        Medium
      </button>
      <button
        onClick={() => setFontSize('large')}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        Large
      </button>
    </div>
  );
};

export default FontSize;
