import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeProvider';

const PostListItem = ({
  id,
  body,
  title,
  userId,
  handleDeleteClicked,
}: {
  id: string;
  body: string;
  title: string;
  userId: string;
  handleDeleteClicked: (id: string) => void;
}) => {
  const { fontSize } = useContext(ThemeContext);

  // 폰트 크기 스타일을 설정하는 함수
  const getFontSize = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'small':
        return 'text-sm';
      case 'medium':
        return 'text-lg';
      case 'large':
        return 'text-xl';
      default:
        return 'text-lg';
    }
  };

  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-2">
        {/* 제목의 폰트 크기 적용 */}
        <h5 className={`font-semibold ${getFontSize(fontSize)}`}>{title}</h5>
        <small className="text-gray-500">Id: {id}</small>
      </div>
      <p className="mb-3 text-gray-700">{body}</p>
      <div className="flex items-center justify-between">
        <button
          onClick={() => handleDeleteClicked(id)}
          type="button"
          className="px-3 py-1 text-sm font-bold text-white bg-red-500 rounded hover:bg-red-600"
        >
          삭제
        </button>
        <small className="text-gray-500">사용자 Id: {userId}</small>
      </div>
    </div>
  );
};

export default PostListItem;
