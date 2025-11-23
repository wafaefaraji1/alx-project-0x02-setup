import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded shadow bg-white mb-2">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700">{content}</p>
      <span className="text-xs text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;